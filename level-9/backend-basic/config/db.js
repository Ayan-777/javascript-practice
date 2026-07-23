import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const MONGO_URL = 'mongodb+srv://mondalayan091:ayan0000@ayanfirst.xr0h6.mongodb.net/backend-basic?retryWrites=true&w=majority'
        await mongoose.connect(MONGO_URL);
        console.log('Connected to MongoDB Atlas successfully!')
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1)
    }
}

export default connectDB