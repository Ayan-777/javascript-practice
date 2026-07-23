import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

app.post("/api/products/new", async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = await Product.create({
      name,
      price: Number(price),
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Failed to create product", error });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Prouduct not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(404).json({message: "Invalid product ID format", error})
  }
});

// 4. UPDATE (PUT)
app.put("/api/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }, 
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: "Failed to update product", error });
  }
});

// 5. DELETE
app.delete("/api/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product deleted successfully",
      deletedProduct,
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete product", error });
  }
});



app.listen(5000, () => {
  console.log(`Server running on part ${"http://localhost:5000"} .....`);
});
