import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import Phones from "./models/Phones.js";
import cors from "cors";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", async (req, res) => {
    res.send("Server is running >>>>>>>>>>>>>>✅")
});

app.get("/api/phones", async (req, res) => {
  try {
    const phones = await Phones.find();
    res.json(phones);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

app.get('/api/phones/:id', async (req,res) => {
    try {
      const phone = await Phones.findById(req.params.id)
      if(!phone){
        return res.status(404).json({message: "Phones not Found! "})
      }
      res.json(phone)
    } catch (error) {
      return res.status(500).json({message: "Invalid product ID forma", error})
    }
})

app.listen(5000, () => {
  console.log(`Sarver is runing on ${"http://localhost:5000"} .....`);
});
