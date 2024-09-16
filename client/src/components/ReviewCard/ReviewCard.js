import "./ReviewCard.css"

function ReviewCard({ _id, comment, createdAt, user }) {

    return (

        <div className="added-review-box">

            <span className="review-user-name">{user?.toUpperCase()}</span>
            <span className="review-time">{new Date(createdAt).toLocaleString()}</span>
            <span className="review-text">{comment}</span>

        </div>

    )
}


export default ReviewCard