import express from "express";
import logger from "morgan";
import router from "./routes/index.js";
import session from "express-session";
import createTables from "./models/createTables.js";

const app = express();
const port = 3000;

createTables();

app.use(logger("dev"));
app.use(
  session({
    secret: "temporal secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);

https: app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
