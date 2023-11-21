import express from "express";
import {
  handleGetProduct,
  handleGetProducts,
  handleDecreaseProduct,
} from "../controllers/productsControllers";
const router = express.Router();

router.get("/", handleGetProducts);
router.get("/:id", handleGetProduct);
router.get("/:productId/stock", handleDecreaseProduct);
export default router;
