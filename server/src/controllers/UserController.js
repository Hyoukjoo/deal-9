import UserRepository from "../repositories/users.js";

const signup = async (req, res) => {
  try {
    const { username } = req.body;

    const user = await UserRepository.create(username);

    if (user) {
      return res.status(409).send({
        message: "이름 중복",
      });
    }

    const result = await UserRepository.findByName(username);

    res.json(result);
  } catch (e) {
    console.error(e);

    res.status(500).json({ message: "서버 에러!" });
  }
};

const login = async (req, res) => {
  try {
    const { username } = req.body;

    const user = await UserRepository.findByName(username);

    if (user === undefined) {
      res
        .status(400)
        .send({ message: `${username} 유저가 존재하지 않습니다.` });
      return;
    }

    res.json({ message: "로그인 성공!" });
  } catch (e) {
    console.error(e);

    res.status(500).json({ message: "서버 에러!" });
  }
};

const logout = async (req, res) => {};

const addLocation = async (req, res) => {};

const removeLocation = async (req, res) => {};

const UserController = {
  signup,
  login,
  logout,
  addLocation,
  removeLocation,
};

export default UserController;
