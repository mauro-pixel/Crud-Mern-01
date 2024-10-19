import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));


app.get("/api/", (req,res)=>{
  res.send("Servidor esta listo");
});

app.post("/api/products", async (req, res) => {

  const product = req.body;

  if( !product.name || !product.price || !product.image ){
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    return res.status(201).json({ success: true, data: newProduct, message: "Successfully" });
  } catch (error) {
     res.status(500).json({ success: false, message: `Error in create product: ${ error.message }` });
  }
});

app.listen(8000, () => {
  connectDB();
  console.log(`Servidor iniciado en http://localhost:8000`);
});