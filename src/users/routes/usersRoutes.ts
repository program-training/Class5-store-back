import express from "express";
import {
  handleGetUser,
  handleUserRegistration,
} from "../controllers/usersControllers";
const router = express.Router();

router.get("/:id", handleGetUser);
// router.get("/", handleGetUsers);
router.post("/", handleUserRegistration);
// router.put("/:id", handleEditUser);
// router.delete("/:id", handleDeleteUser);
// router.post("/login", handleLogin);
// router.post("/add-product/:id", handleAddProductToUser);
router.post("/signup", handleUserRegistration);

export default router;
