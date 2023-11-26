import express from "express";
import {
  LoginController,
  getUserByIdController,
  getUsersController,
  registerUserController,
} from "../controllers/usersControllers";

const router = express.Router();

router.get("/", getUsersController);

router.get("/:id", getUserByIdController);

router.post("/", registerUserController);

router.post("/signIn", LoginController);

export default router;
