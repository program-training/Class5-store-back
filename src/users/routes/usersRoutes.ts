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

//הרשמת אדמין
router.post("/", registerAdminController);

//משתמש רגיל
router.post("/user", registerUserController);

router.post("/signIn", LoginController);

export default router;
