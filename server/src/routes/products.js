import { Router } from "express";
import ProductController from "../controllers/ProductController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import upload from "../utils/upload.js";

const router = Router();

router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProduct);
router.post("/", upload.array("images"), ProductController.createProduct);

router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});

export default router;
