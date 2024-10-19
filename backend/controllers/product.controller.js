import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(201).json({ success: true, data: products });
  } catch (error) {
    return res.status(500).json({ error: true, message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    return res.status(201).json({
      success: true,
      data: newProduct,
      message: "created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in create product: ${error.message}`,
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteProduct = await Product.findOne(id);

    if (!deleteProduct) {
      return res.status(400).json({ success: true, message: "Not found" });
    }

    await deleteProduct.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: "Deleted successfully " });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(400).json({ success: false, message: "Not found" });
    }
    return res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
