import mongoose from "mongoose";
import dotenv from "dotenv";
import { categorySchema } from "../features/product/category.schema.js";

dotenv.config();

const url = process.env.DB_URL;

export const connectUsingMongoose = async () => {
    try {
        await mongoose.connect(url);   // ✅ removed old options
        console.log("MongoDB connected using mongoose");

        await addCategories();         // ✅ added await (important)

    } catch (err) {
        console.log("Error while connecting to db");
        console.log(err);
    }
};

async function addCategories() {
    const CategoryModel = mongoose.models.Category 
        || mongoose.model("Category", categorySchema);  // ✅ prevents OverwriteModelError

    const categories = await CategoryModel.find();

    if (categories.length === 0) {
        await CategoryModel.insertMany([
            { name: 'Books' },
            { name: 'Clothing' },
            { name: 'Electronics' }
        ]);
        console.log("Default categories added");
    } else {
        console.log("Categories already exist");
    }
}