
import Review from "../models/Review.js"

const postReview = async (req, res) => {

    const { comment ,user } = req.body

    const review = new Review({
        comment,
        user
    })
    if(!user){
        return res.status(404).json({
            success:false,
            message:"user must be login for send reviews",
            data:null
            
        })
    }

    try {

        const savedReview = await review.save();
        res.status(201).json({
            success: true,
            message: `review save successfully`,
            data: savedReview
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
            data: null
        })
    }

}

const getReview = async (req, res) => {
    try {
        const allReview = await Review.find().populate('user').sort({ createdAt: -1 });

        console.log("allReview")
        res.status(200).json({
            success: true,
            message: `allReview fetch successfully`,
            data: allReview
        })
    }

    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: null
        })
    }
}

export {
    postReview,
    getReview
}