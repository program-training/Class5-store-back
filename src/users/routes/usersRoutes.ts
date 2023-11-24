import express from "express";
import {
  getUserByIdController,
  getUsersController,
  registerUserController,
} from "../controllers/usersControllers";

const router = express.Router();

router.get("/", getUsersController);

router.get("/:id", getUserByIdController);

router.post("/", registerUserController);

export default router;
