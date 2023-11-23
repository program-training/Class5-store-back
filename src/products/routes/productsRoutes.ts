import express from "express";
import {
  handleGetFromStock,
  handleGetProduct,
  handleGetProducts,
} from "../controllers/productsControllers";

const router = express.Router();

router.get("/", handleGetProducts);

router.get("/:id", handleGetProduct);

router.post("/stock", handleGetFromStock);

export default router;
