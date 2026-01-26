class ProductRepository {
    constructor(){
        this.collection = "products";
    }
    async add(newproduct) {
    try{
        const db = getDB();
        const collection = db.collection(this.collection);
        await collection.insertOne(newproduct);
        return newproduct;
    }catch(err){
        console.log(err);
        throw new ApplicationError("Something went wrong with database", 500);
}}
}