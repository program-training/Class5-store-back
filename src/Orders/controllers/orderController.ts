// import { handleError } from "../../utils/handleErrors";
// import { getDatabase, modifyCollection } from "../dal/orderDal";
// import { Request, Response } from "express";

// export const handleGetOrders = async (req: Request, res: Response) => {
//   try {
//     const Orders = await getDatabase();
//     return res.send(Orders);
//   } catch (error) {
//     handleError(res, error);
//   }
// };

// export const handleGetOrder = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const Orders = await getDatabase();
//     return res.send(Orders);
//   } catch (error) {
//     handleError(res, error);
//   }
// };
