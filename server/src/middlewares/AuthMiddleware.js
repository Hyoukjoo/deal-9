import { AUTH_TOKEN, SEVEN_DAYS_MILLISECONDS } from "../common/constant.js";
import Token from "../utils/token.js";

const verify = (req, res, next) => {
  try {
    const token = req.cookies[AUTH_TOKEN];

    if (token === undefined) {
      res.status(401).json({ message: "쿠키가 유효하지 않습니다." });
      return;
    }

    const decoded = Token.verify(token);
    const { username, userId } = decoded;

    if (decoded.isRemainedOneDay) {
      const newToken = Token.getToken();

      res.cookie(AUTH_TOKEN, newToken, {
        maxAge: SEVEN_DAYS_MILLISECONDS,
        httpOnly: true,
      });
    }

    res.locals.user = { username, userId };

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
