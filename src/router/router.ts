import express, { Request, Response } from "express";
import usersRouter from "../users/routes/usersRoutes";
import productsRouter from "../products/routes/productsRoutes";
import ordersRouter from "../Orders/routes/OrderRoutes";

const router = express.Router();

router.use("/api/users", usersRouter);

router.use("/api/products", productsRouter);

router.use("/api/orders", ordersRouter);

router.use("*", (req: Request, res: Response) => {
  console.log(req);
  res.status(404).send("Page not found!");
});

export default router;
