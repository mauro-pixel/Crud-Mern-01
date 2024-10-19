import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger from "morgan";

import { connectDB } from "./config/db.js";

import ProductRoute from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/products", ProductRoute);

app.listen(8000, () => {
  connectDB();
  console.log(`Servidor iniciado en http://localhost:8000`);
});