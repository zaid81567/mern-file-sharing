import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import { DBConnection } from "./database/db.js";

//intializing express
const app = express();

//this allows cross origin request
app.use(cors());

//send whole traffic to router -> router.js
app.use("/", router);

//choosing port for server
const PORT = 8000;

//calling db connection
DBConnection();

//start server -> PORT, CALL-BACK FUCNTION (will run imidiatly after the server starts)
app.listen(PORT, () => {
  console.log("server is running on PORT: " + PORT);
});
