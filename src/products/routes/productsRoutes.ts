import express from "express";
import {
  handleGetProduct,
  handleGetProducts,
  handleGetProductsInStock
} from "../controllers/productsControllers";
const router = express.Router();

router.get("/", handleGetProducts);
router.get("/:id", handleGetProduct);
router.post("/getProductsInStock", handleGetProductsInStock)
// router.get("/:productId/stock", handleDecreaseProduct);
export default router;
