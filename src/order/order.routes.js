import express from 'express';


const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.post("/",(req, res, next)=>{
    orderController.plaseOrder(req, res, next);
})
export default orderRouter;