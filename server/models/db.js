import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "mysql_server",
  user: "deal-9",
  password: "secret",
  database: "test_db",
});

export default pool;
