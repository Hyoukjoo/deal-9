import { Router } from "express";
import { insertUser, selectUser } from "../models/index.js";

const router = Router();

router.get("/:id", (req, res) => {});

router.post("/", async (req, res) => {
  const { name } = req.body;

  const user = await selectUser(name);
  if (user) {
    return res.status(409).send({
      message: "이름 중복",
    });
  }

  await insertUser(name);
  // TODO: 회원 가입 후 로그인(?)
  res.status(201).send({
    user: name,
  });
});

router.put("/", (req, res) => {});

export default router;
