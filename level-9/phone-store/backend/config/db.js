import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connect successfully >>>>');
    } catch (error) {
        console.log(`MongoDB Atlas Connect Error ${error}`);
        process.exit(1);
    }
}

export default connectDB;