import { Router } from "express";
import UsersRoutes from "./users.js";
import ProudctsRoutes from "./products.js";

const router = Router();

router.use("/users", UsersRoutes);
router.use("/products", ProudctsRoutes);

export default router;
