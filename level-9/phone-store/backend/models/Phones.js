import mongoose, { Schema } from "mongoose";

const phonesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  Offers: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true,
  },
},{timestamps: true});

export default mongoose.model("Phone", phonesSchema);