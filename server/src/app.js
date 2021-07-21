import express from "express";
import logger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import env from "../config/env.js";
import router from "./routes/index.js";
import createTables from "./db/createTables.js";

const { PORT, CLIENT_URL, COOKIE_SECRET } = env;

const isDev = process.env.NODE_ENV === "development";

// createTables();

const app = express();

app.use(logger(isDev ? "dev" : "combine"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(cookieParser(COOKIE_SECRET));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server Run on ${PORT}`);
});
