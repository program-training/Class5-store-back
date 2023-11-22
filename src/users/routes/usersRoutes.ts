import express from "express";
import {
  handleGetUser,
  handleUserRegistration,
} from "../controllers/usersControllers";
const router = express.Router();

router.get("/:id", handleGetUser);

router.post("/", handleUserRegistration);

router.post("/signup", handleUserRegistration);

export default router;
