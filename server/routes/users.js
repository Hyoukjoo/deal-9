import { Router } from "express";
import { insertUser, selectUser } from "../models/index.js";

const router = Router();

router.post("/", async (req, res) => {
  const { name } = req.body;

  const user = await selectUser(name);
  if (user) {
    return res.status(409).send({
      message: "이름 중복",
    });
  }

  await insertUser(name);

  req.session.username = username;
  req.session.save(() => {
    res.redirect("/");
  });
});

router.post("/login", (req, res) => {
  const { name } = req.body;
  const user = await selectUser(name);
  if (!user) {
    return res.status(409).send({
      message: "회원이 아닙니다",
    });
  }

  req.session.username = username;
  req.session.save(() => {
    res.redirect("/");
  });
});

router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

export default router;
