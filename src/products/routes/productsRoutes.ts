import express from "express";
import {
  handleGetProduct,
  handleGetProducts,
  handleSubtractQuantity,
} from "../controllers/productsControllers";
const router = express.Router();

router.get("/", handleGetProducts);
router.get("/:id", handleGetProduct);
router.get("/:id/subtract", handleSubtractQuantity);

export default router;
