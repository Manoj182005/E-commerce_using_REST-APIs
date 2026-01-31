import mongoos from 'mongoose';

export const PrdouctSchema = new mongoos.Schema({
    name : {type : String, required: true},
    
})