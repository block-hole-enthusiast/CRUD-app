import mongoose from "mongoose";

const Connection = async() => {
    const URL = process.env.DB;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database connected successfully");
    } catch(error) {
        console.log("Error while connecting with the database",error);
    }
}

export default Connection;