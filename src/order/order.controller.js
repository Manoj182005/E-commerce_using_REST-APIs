import OrderRepository from "./order.repository";

export default class OrderController{
    constructor(){
        this.orderRepository = new OrderRepository();;
    }
    async placeOrder(req, res){
    try{
        
    }catch(error){
        next(error);
    }
}
}