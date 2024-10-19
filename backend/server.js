import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";


dotenv.config();

const app = express();

app.get("/", (req,res)=>{
  res.send("Servidor esta listo");
});

app.listen(8000, () => {
  connectDB();
  console.log(`Servidor iniciado en http://localhost:8000`);
});