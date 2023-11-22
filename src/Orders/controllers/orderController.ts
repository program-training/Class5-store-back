import { handleError } from "../../utils/handleErrors";
import { Request, Response } from "express";
import { getAllOrders, getOrderByUserId } from "../service/orderService";


export const handleGetOrders = async (req: Request, res: Response) => {
  try {
<<<<<<< HEAD
    const Orders = await getOrdersFromDb();
    return res.status(200).send(Orders);
=======
    const Orders = await getAllOrders();
    return res.send(Orders);
>>>>>>> 13d8a0db855f83dd230f99b4bbc0a9a70d100ff4
  } catch (error) {
    handleError(res, error);
  }
};

export const handleGetOrderByUserId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const Orders = await getOrderByUserId(id);
    return res.send(Orders);
  } catch (error) {
    handleError(res, error);
  }
};
