import { Router } from "express";

const router = Router();

router.get("/:id", (req, res) => {
  console.log("hello");
  res.status(200).send({
    name: "",
  });
});
router.post("/", (req, res) => {});
router.put("/", (req, res) => {});

export default router;
