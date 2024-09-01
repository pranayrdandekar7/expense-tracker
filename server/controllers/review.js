
import Review from "../models/Review.js"

const postReview = async (req, res) => {

    const { comment } = req.body

    const review = new Review({
        comment
    })

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
        const allReview = await Review.find().sort({ createdAt: -1 });

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