import "./Signup.css"
import { useState } from 'react';
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast"
import {Link} from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Signup() {

  const [fullname, setfullname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [dob, setdob] = useState("")

  const signup = async () => {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`,
      {
        fullname,
        email,
        password,
        dob
      })

    if (response.data.success) {

      toast.success(response.data.message)

      setfullname("");
      setemail("");
      setpassword("");
      setdob("");

      setTimeout(() => {
        window.location.href = "/terms-and-conditions"
    }, 400)

    }
    else {
      toast.error(response.data.message)
    }
  }

  return (<>

  <Navbar/>
     
    <h1 className="auth-heading">User Registration</h1>

    <form className="auth-form">
      <input type="text"
        placeholder="Enter Full Name"
        className="user-input"
        value={fullname}
        onChange={(e) => {
          setfullname(e.target.value);

        }} />

      <input type="email"
        placeholder="Enter Your Email"
        className="user-input"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);

        }}
      />

      <input type="password"
        placeholder="Enter Your Password"
        className="user-input"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }} />

      <input type="date"
        
        className="user-input"
        value={dob}
        onChange={(e) => {
          setdob(e.target.value);
        }} />

      <button type="button" className="auth-btn" onClick={signup}>Signup Here</button>
      
      
    </form>
    <Link to="/login" className="auth-link">Already have an account ?  <span className="account-auth">Login</span></Link>
      
      <Footer/>
    
  </>
  )
}

export default Signup