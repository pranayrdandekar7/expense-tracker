import Transaction from '../models/Transaction.js'
import User from '../models/User.js';

const postTransaction = async (req, res) => {

    const { amount, category, type, user,title } = req.body;

    const transaction = new Transaction({
        title:title,
        amount: amount,
        category: category,
        type: type,
        user: user
    })

   

    try {

        const savedTransaction = await transaction.save();

        res.json({
            success: true,
            message: `transaction save successfully`,
            data: savedTransaction
        })
    }

    catch (e) {
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }

}

const getTransactions = async (req,res)=>{

    const {userId} =req.query ;

    const user = await User.findById(userId)

    if(!user){
        return res.json({
            success:false,
            message:`user not found`,
            data:null
        })
    }

    const transactions= await Transaction.find({user:userId}) .sort({createdAt : -1}) ;

    res.json({
        success:true,
        message:`transaction fetched successfully`,
        data:transactions
    })

}

const deleteTransaction =async (req,res)=>{
    const {id}= req.params

    await Transaction.deleteOne({_id:id});
    res.json({
        success:true,
        message:`transaction delete successfully`,
        data:null
    })
}

export {
    postTransaction,
    getTransactions,
    deleteTransaction
}