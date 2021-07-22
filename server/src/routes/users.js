import { Router } from "express";
import UserController from "../controllers/UserController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const router = Router();

router.get("/", AuthMiddleware.verify, UserController.getMyInfo);

router.post("/signup", UserController.signup);

router.post("/login", UserController.login);

router.post("/logout", UserController.logout);

router.post("/location", AuthMiddleware.verify, UserController.addLocation);

router.delete(
  "/location",
  AuthMiddleware.verify,
  UserController.removeLocation
);

export default router;
