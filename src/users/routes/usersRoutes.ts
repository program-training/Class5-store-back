import express from "express";
import {
  handleGetUser,
  handleGetUsers,
  handleUserRegistration,
} from "../controllers/usersControllers";
const router = express.Router();

router.get("/", handleGetUsers);
router.get("/:id", handleGetUser);

router.post("/", handleUserRegistration);
router.post("/signup", handleUserRegistration);

export default router;
