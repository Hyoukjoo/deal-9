import jwt from "jsonwebtoken";

import env from "../../config/env.js";

const getToken = (payload) => {
  payload.iss = "system";

  const token = jwt.sign(payload, env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });

  return token;
};

const verify = (token) => {
  const decoded = jwt.verify(token, env.JWT_SECRET_KEY);

  decoded.isRemainedOneDay = decoded.exp - Date.now() / 1000 < 1;

  return decoded;
};

const Token = {
  getToken,
  verify,
};

export default Token;
