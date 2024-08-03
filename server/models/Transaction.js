import {Schema,model} from 'mpngoose';

const transactionSchema =new Schema({

    amount :{
        type:Number,
        required:true
    },
    category:{
        type:String,
        default:"others"
    },
    type:{
        type :String,
        enum :["credit","debit"]
    },
    user:{
        type: Schema.Types.ObjectId ,
        ref:"User"
    }
},{
    timestamp:true
})

const Transaction = model("Transaction", transactionSchema)