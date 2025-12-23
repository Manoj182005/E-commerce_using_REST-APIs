import  express from 'express';

const server = express();

server.get("/",(req, res)=>{
    res.send("Welcome to E-commerce API")
})

server.listen(3200, ()=>{
    console.log("server is running on port 3200");
})