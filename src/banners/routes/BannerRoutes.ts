import express from "express";
import { handleGetBanner } from "../controllers/bannerController";

const router = express.Router();

router.get("/", handleGetBanner);

export default router;
