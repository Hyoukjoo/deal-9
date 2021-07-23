import express from "express";
import logger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import env from "../config/env.js";
import router from "./routes/index.js";
import createTables from "./db/createTables.js";

const { PORT, CLIENT_DOMAIN, COOKIE_SECRET, CLIENT_PORT, CLIENT_PROTOCOL } =
  env;

const isDev = process.env.NODE_ENV === "development";

createTables();

const app = express();

app.use(logger(isDev ? "dev" : "combine"));
app.use(
  cors({
    origin: `${CLIENT_PROTOCOL}://${CLIENT_DOMAIN}`,
    credentials: true,
  })
);
app.use(cookieParser(COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server Run on ${PORT}`);
});
