import mongoose from "mongoose";

const connectDb = async () => {
    try{
        await mongoose.connect("mongodb+srv://konduruharshith5_db_user:konduruharshith@cluster0.ee7xwgi.mongodb.net/rate_limiter");
        console.log("db connected sucessfully!")
    }catch{
        console.log("some error occured");
    }
}

export default connectDb;