import express from "express";
import router from "./router/router";
const app = express();
import chalk from "chalk";
import morgan from "./logger/morgan";
import cors from "./cors/cors";
import { connectToDatabase } from "./dataAccess/mongoose";

app.use(morgan);
app.use(cors);
app.use(express.json());
app.use(router);

const PORT = 3333;
app.listen(PORT, () => {
  console.log(chalk.blueBright(`Server listening on port: ${PORT}`));

  connectToDatabase()
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));
});
