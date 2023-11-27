import cors from "cors";
// import { CorsOptionsDelegate } from "cors";
// import ServerError from "../utils/ServerError";
// const whiteList = ["http://127.0.0.1"];

// const corsOptions: CorsOptionsDelegate = (req, callback) => {
//   const origin = req.headers.origin;
//   if (!origin || whiteList.includes(String(origin))) {
//     callback(null, { origin: true });
//   } else {
//     callback(
//       new ServerError(401, `CORS Error: The API ${origin} is unauthorized`),
//       { origin: false }
//     );
//   }
// };

// const corsHandler = cors(corsOptions);

export default cors();
