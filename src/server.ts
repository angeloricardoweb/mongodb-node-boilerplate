import express from "express";
import { router } from "./routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const dbInit = require("./database/connection");

dbInit();
app.use(express.json());
app.use(router);

app.listen(4003, () => console.log("Server is running on PORT 4003"));
