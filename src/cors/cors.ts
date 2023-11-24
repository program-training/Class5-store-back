import cors from "cors";
// import { CorsOptionsDelegate } from "cors";

// const whiteList = ["http://127.0.0.1:517*"];

// const corsOptions: CorsOptionsDelegate = (req, callback) => {
//   const authorized = whiteList.includes(req.headers.origin);
//   if (!authorized)
//     return callback(
//       new Error(`CORS Error the API ${req.headers.origin} is unauthorized`),
//       { origin: false }
//     );
//   callback(null, { origin: true });
// };

// const corsHandler = cors(corsOptions);

const corsHandler = cors();

export default corsHandler;
