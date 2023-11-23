import express, { Request, Response } from "express";
const router = express.Router();
import usersRoutes from "../users/routes/usersRoutes";
import productsRoutes from "../products/routes/productsRoutes";
import orderRouters from "../Orders/routes/OrderRoutes";
import BannerRoutes from "../banners/routes/bannerRoutes";
router.use("/api/users", usersRoutes);
router.use("/api/products", productsRoutes);
router.use("/api/orders", orderRouters);
router.use("/api/banners", BannerRoutes);
router.use("*", (req: Request, res: Response) => {
  console.log(req);
  res.status(404).send("Page not found!");
});

export default router;
