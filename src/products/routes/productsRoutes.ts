import express from "express";
import {
  getProductByIdController,
  getProductsController,
  getProductsStockController,
} from "../controllers/productsControllers";

const router = express.Router();

router.get("/", getProductsController);

router.get("/:id", getProductByIdController);

router.post("/stock", getProductsStockController);

export default router;
