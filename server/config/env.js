import dotenv from "dotenv";

dotenv.config();

const env = {
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  PORT: Number(process.env.PORT) || 4000,
  CLIENT_PROTOCOL: process.env.CLIENT_PROTOCOL,
  CLIENT_DOMAIN: process.env.CLIENT_DOMAIN,
  CLIENT_PORT: process.env.CLIENT_PORT || 80,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
};

export default env;
