import {model,Schema} from "mongoose"

const emailSchema = new Schema({
    to :{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    html:{
        type:String,
        required:true
    },
    status:{
        type:String,
       
        enum:["sent","failed"],
        default:"sent",
        required:true,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        require:true
    }
},
{
    timestamps:true 

}) ;

const Email = model ("Email",emailSchema) ;

export default Email ;