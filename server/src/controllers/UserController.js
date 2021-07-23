import env from "../../config/env.js";
import { AUTH_TOKEN, SEVEN_DAYS_MILLISECONDS } from "../common/constant.js";
import { locationRE, usernameRE } from "../common/regex.js";
import UserRepository from "../repositories/UserRepository.js";
import Token from "../utils/token.js";

const signup = async (req, res) => {
  try {
    const { username, location } = req.body;

    if (!usernameRE.test(username) || !locationRE.test(location)) {
      return res.status(400).json({
        success: false,
        message: "유효하지 않는 아이디 또는 동네입니다.",
      });
    }

    const result = await UserRepository.findUserByName(username);
    const isExistedUser = result[0][0] !== undefined;

    if (isExistedUser) {
      return res.status(409).json({
        message: "이름 중복",
      });
    }

    UserRepository.create(username, location).then(() => {
      res.json({ success: true });
    });
  } catch (e) {
    console.error(e);

    res.status(500).json({ message: "서버 에러!" });
  }
};

const login = async (req, res) => {
  try {
    const { username } = req.body;

    const result = await UserRepository.findUserByName(username);

    const user = result[0][0];

    if (user === undefined) {
      res
        .status(400)
        .json({ message: `${username} 유저가 존재하지 않습니다.` });
      return;
    }

    const token = Token.getToken({ username: user.name, userId: user.id });

    res.cookie(AUTH_TOKEN, token, {
      httpOnly: true,
      maxAge: SEVEN_DAYS_MILLISECONDS,
      signed: true,
      domain: env.CLIENT_DOMAIN,
    });

    res.json({ message: "로그인 성공!", data: { user } });
  } catch (e) {
    console.error(e);

    res.status(500).json({ message: "서버 에러!" });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie(AUTH_TOKEN);

    res.json({ message: "로그아웃 성공!" });
  } catch (e) {
    console.error(e);

    res.status(500).json({ message: "서버 에러!" });
  }
};

const getMyInfo = async (req, res) => {
  try {
    const { userId } = res.locals.user;

    const result = await UserRepository.findUserById(userId);

    const user = result[0][0];

    res.json({ user });
  } catch (e) {
    console.error(e);

    res.status(500).json({ message: "서버 에러!" });
  }
};

const getMyLocation = async (req, res) => {
  try {
    const { userId } = res.locals.user;

    let results = await UserRepository.findLocationsOfUserByUserId(userId);

    results = await Promise.all(
      results[0].map((result) =>
        UserRepository.findLocationById(result.location_id)
      )
    );

    const locations = results.map((result) => result[0][0]);

    res.json({ locations });
  } catch (e) {
    console.error(e);

    res.status(500).json({ message: "서버 에러!" });
  }
};

const addLocation = async (req, res) => {
  try {
    const { location } = req.body;
    const { userId } = res.locals.user;

    const isDong = locationRE.test(location);

    if (!isDong) {
      res.status(400).json({ message: "적합한 동 형태가 아닙니다." });
      return;
    }

    const existLocation = await UserRepository.findLocationByName(location);

    let locationInfo = existLocation[0][0];

    const isNotExistLocation = locationInfo === undefined;

    if (isNotExistLocation) {
      const result = await UserRepository.createLocation(location);

      locationInfo = { id: result[0].insertId };
    }

    await UserRepository.addLocation(userId, locationInfo.id);

    const locationsOfUser = await UserRepository.findLocationsOfUserByUserId(
      userId
    );

    const results = await Promise.all(
      locationsOfUser[0].map(({ location_id }) => {
        return UserRepository.findLocationById(location_id);
      })
    );

    const data = results.map((result) => result[0][0]);

    res.json({ message: "동네 등록 성공!", data });
  } catch (e) {
    console.error(e);

    res.status(500).json({ message: "서버 에러!" });
  }
};

const removeLocation = async (req, res) => {
  try {
    const { location } = req.params;
    const { userId } = res.locals.user;

    let result = await UserRepository.findLocationByName(location);

    const locationId = result[0][0].id;

    result = await UserRepository.removeLocation(userId, locationId);

    res.send();
  } catch (e) {
    console.error(e);

    res.status(500).json({ message: "서버 에러!" });
  }
};

const UserController = {
  signup,
  login,
  logout,
  getMyInfo,
  getMyLocation,
  addLocation,
  removeLocation,
};

export default UserController;
