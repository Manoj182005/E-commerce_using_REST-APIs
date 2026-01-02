import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/ecomdb";

const connetToMongoDB = () =>{
    MongoClient.connect(url)
    .then((client) => {
        console.log("mongodb connected sucessfully");

    })
    .catch((err) =>{
        console.log("mongodb connection failed", err);
    })
    }
export default connetToMongoDB;