import fs from "fs";
import path from "path";
import http from "http";
import express from "express";
import compression from "compression";

const app = express();
const port = process.env.PORT || 8080;
const version = process.env.VERSION || "1.0.0";

app.use(compression());
app.use(express.static("dist"));

app.get("*", (req, res) => {
  fs.readFile(
    path.join(path.resolve(), "dist/index.html"),
    { encoding: "utf-8" },
    (err, html) => {
      if (err) {
        throw err;
      }
      res.header("Cache-Control", `public max-age=${60 * 60 * 24 * 7}`);
      res.header("ETag", `version-${version}`);
      res.type("html");
      res.send(html);
    }
  );
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`clinet server run on port ${port}`);
});
