import express, { Request, Response } from "express";
import usersRoutes from "../users/routes/usersRoutes";
import productsRoutes from "../products/routes/productsRoutes";
import orderRouters from "../orders/routes/ordersRouter";

const router = express.Router();

router.use("/api/users", usersRoutes);
router.use("/api/products", productsRoutes);
router.use("/api/orders", orderRouters);

router.use("*", (req: Request, res: Response) => {
  console.log(req);
  res.status(404).send("Page not found!");
});

export default router;
