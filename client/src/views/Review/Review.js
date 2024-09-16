import { useState, useEffect } from "react"
import "./Review.css"
import axios from "axios"
import toast from "react-hot-toast"
import ReviewCard from "../../components/ReviewCard/ReviewCard"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

function Review() {
   const [user, setUser] = useState()
   const [addReview, setAddReview] = useState("")
   const [reviews, setReviews] = useState([]);

// console.log(reviews);
   useEffect(() => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"))  

      if (currentUser) {
         setUser(currentUser)
        
      }
      if (!currentUser) {
         window.location.href = "/login"
      }
   }, [])

   // console.log(user);
   useEffect(() => {
      loadReview()
   }, [user])

   const loadReview = async () => {
      if (!user ) {
         return
      }

      toast.loading(`Loading Review`)
      try {
         const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/reviews`) 
         toast.dismiss()
         setReviews(response.data.data);
      }
      catch (err) {
         toast.dismiss();
         toast.error(`Failed to load reviews.`);
      }
   }

   const AddingReview = async () => {

      if (!addReview ) {
         toast.error(`you should write something about our expense tracker`)
         return;
      }
      
      try {
         
         const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/review`,
            {
               comment: addReview,
               user: user?._id
            })
           
         if (response) {
            toast.success(`review saved successfully`)
            setAddReview("")
            loadReview()
            
         }

      }
      catch (err) {
         toast.error(`Failed to save review,please try again.`)
      }
   }

   return (
      <>
      <Navbar/>
         <h2 className="review-heading">"Hear Directly from Our Users: Expense Tracker Reviews"</h2>

         <textarea type="text"
            placeholder="Add your review"
            className="review-box"
            value={addReview}
            onChange={(e) => {
               setAddReview(e.target.value)
            }}>
         </textarea>

         <button className="review-btn"
            type="button"
            onClick={AddingReview}>
            Add your review
         </button>

         <div className="review-container">
            {
               reviews.map((review,i) => {
                  const { _id, comment, user, createdAt } = review
                  return (

                     <ReviewCard
                        _id={_id}
                        key={i}
                        comment={comment}
                        user={user?.fullname}
                        createdAt={createdAt}
                        loadReview={loadReview}


                     />
                  )

               })
            }

         </div>

         <Footer/>

      </>

   )
}

export default Review