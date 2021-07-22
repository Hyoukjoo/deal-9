import { Router } from "express";
import ProductController from "../controllers/ProductController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const router = Router();

router.get("/", ProductController.getProducts);

router.post("/", ProductController.createProduct);

router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});

export default router;
