import { Router } from "express";
import ProductRepository from "../repositories/products.js";

const router = Router();

router.get("/", async (req, res) => {
  const { locationId, categoryId } = req.query;
  const proudcts = await ProductRepository.getProducts({
    locationId,
    categoryId,
  });
  res.status(200).send(proudcts);
});

router.post("/", async (req, res) => {
  const { userId, locationId, title, content, status, images, categories } =
    req.body;
  await ProductRepository.createProduct({
    userId,
    locationId,
    title,
    content,
    status,
    images,
    categories,
  });

  res.status(204).send();
});

router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});

export default router;
