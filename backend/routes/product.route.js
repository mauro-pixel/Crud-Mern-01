import expresss from "express";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = expresss.Router();

router.get("/get-all-products", getProducts);
router.post("/create-product", createProduct);
router.delete("/delete-product/:id", deleteProduct);
router.put("/update-product/:id", updateProduct);

export default router;