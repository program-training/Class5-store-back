import express from "express";
import {
  LoginController,
  getUserByIdController,
  getUsersController,
  registerAdminController,
  registerUserController,
} from "../controllers/usersControllers";

const router = express.Router();

router.get("/", getUsersController);

router.get("/:id", getUserByIdController);

router.post("/admin", registerAdminController);

router.post("/user", registerUserController);

router.post("/signIn", LoginController);

export default router;
