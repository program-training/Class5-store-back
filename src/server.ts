import express from "express";
import router from "./router/router";
import chalk from "chalk";
import morgan from "./logger/morgan";
import cors from "./cors/cors";
import { connectToDatabase } from "./dataAccess/mongoose";
import handleErrorMiddleware from "./middlewares/handleErrorMiddleware";
import { connectedToOMS } from "./Orders/dal/orderDal";
import { connectedToERP } from "./products/dal/productsDal";
import { initialDataToDB } from "./users/dal/usersDal";
import { users } from "./initialData/initialData";
const app = express();

app.use(morgan);
app.use(cors);
app.use(express.json());
app.use(router);
app.use(handleErrorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(chalk.blueBright(`Server listening on port: ${PORT}`));
  await connectedToOMS();
  await connectedToERP();
  connectToDatabase()
    .then((message) => {
      console.log(message);
      initialDataToDB(users)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    })
    .catch((error) => console.log(error.message));
});
export default app;
