import cors from "cors";
import { CorsOptionsDelegate } from "cors";
import ServerError from "../utils/ServerError"
const whiteList = ["http://127.0.0.1"];

const corsOptions: CorsOptionsDelegate = (req, callback) => {
  const authorized = whiteList.includes(String(req.headers.origin)) || !req.headers.origin;
  if (!authorized)
    return callback(
      new ServerError(
        401,
        `CORS Error the API ${req.headers.origin} is unauthorized`
      ),
      { origin: false }
    );
  callback(null, { origin: true });
};

const corsHandler = cors(corsOptions);

export default corsHandler;
