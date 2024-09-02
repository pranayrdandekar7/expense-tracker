import "./ReviewCard.css"
import { useState, useEffect } from "react"



function ReviewCard({ _id, comment, createdAt }) {

    const [user, setUser] = useState("")


    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))

        if (currentUser) {
            setUser(currentUser)
            console.log(user)
        }

    }, [])

    return (

        <div className="added-review-box">

            <span className="review-user-name">{user?.fullname?.toUpperCase()}</span>
            <span className="review-time">{new Date(createdAt).toLocaleString()}</span>
            <p>{comment}</p>

        </div>

    )
}


export default ReviewCard