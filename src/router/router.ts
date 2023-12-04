import express, { Request, Response } from "express";
const router = express.Router();
import usersRoutes from "../users/routes/usersRoutes";
import productsRoutes from "../products/routes/productsRoutes";
import orderRouters from "../Orders/routes/OrderRoutes";

router.use("/users", usersRoutes);
router.use("/products", productsRoutes);
router.use("/orders", orderRouters);

router.use("*", (req: Request, res: Response) => {
  console.log(req);
  res.status(404).send("Page not found!");
});

export default router;
