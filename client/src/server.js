import fs from "fs";
import path from "path";
import http from "http";
import express from "express";
import compression from "compression";
import env from "../config/env.js";

const app = express();
const port = env.PORT || 80;
const version = process.env.VERSION || "1.0.0";
const __dirname = process.cwd();

app.use(compression());
app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.header("Cache-Control", `public max-age=${60 * 60 * 24 * 7}`);

  if (req.path.endsWith(".js")) {
    fs.readFile(path.join(__dirname, "dist/main.js"), (err, js) => {
      if (err) {
        throw err;
      }
      res.type("application/javascript");
      res.send(js);
    });
  } else if (req.path.endsWith(".css")) {
    fs.readFile(path.join(__dirname, "dist/style.css"), (err, css) => {
      if (err) {
        throw err;
      }
      res.type("text/css");
      res.send(css);
    });
  } else {
    fs.readFile(
      path.join(__dirname, "dist/index.html"),
      { encoding: "utf-8" },
      (err, html) => {
        if (err) {
          throw err;
        }
        res.header("ETag", `version-${version}`);
        res.type("html");
        res.send(html);
      }
    );
  }
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`clinet server run on port ${port}`);
});
