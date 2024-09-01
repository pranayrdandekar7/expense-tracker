import {model,Schema} from "mongoose"

const reviewSchema = new Schema({

    user:{
       type: Schema.Types.ObjectId,
       ref:"User",
       require:true
    },
    comment:{
        type:String,
        require:true
    }

},
{
    timestamps:true 
})

const Review = model ("Review",reviewSchema);

export default Review ;