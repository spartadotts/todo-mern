import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_DB_URL || "";

console.log(MONGO_URL);


mongoose.connect(MONGO_URL);

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean 

})

const todoModel = mongoose.model('Todo', todoSchema) ;

export default todoModel;