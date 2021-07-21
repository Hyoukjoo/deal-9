import { AUTH_TOKEN } from "../common/constant.js";
import Token from "../utils/token.js";

const SEVEN_DAYS_MILLISECONDS = 1000 * 60 * 60 * 24 * 7;

const verify = (req, res, next) => {
  try {
    const token = req.cookies[AUTH_TOKEN];

    if (token === undefined) {
      res.status(401).send();
      return;
    }

    const decoded = Token.verify(token);
    const { username } = decoded;

    if (decoded.isRemainedOneDay) {
      const newToken = Token.getToken();

      res.cookie(AUTH_TOKEN, newToken, {
        maxAge: SEVEN_DAYS_MILLISECONDS,
        httpOnly: true,
      });
    }

    res.locals.user = { username };

    next();
  } catch (e) {
    if (e.message === "jwt expired") {
      res.status(401).json({ message: "토큰이 만료되었습니다." });
    } else if (e.message === "invalid token") {
      res.status(401).json({ message: "유효하지 않은 토큰입니다." });
    } else {
      console.error(e);

      res.status(500).send();
    }
  }
};

const AuthMiddleware = {
  verify,
};

export default AuthMiddleware;
