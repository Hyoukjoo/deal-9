import mysql from "mysql2/promise";
import env from "../../config/env.js";

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = env;

const connection = await mysql.createConnection({
  host: MYSQL_HOST || "mysql_server",
  user: MYSQL_USER || "deal-9",
  password: MYSQL_PASSWORD || "secret",
  database: MYSQL_DATABASE || "test_db",
  multipleStatements: true,
});

export default connection;
