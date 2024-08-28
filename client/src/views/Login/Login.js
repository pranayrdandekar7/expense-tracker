import { useState } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import Navbar from "../../components/Navbar/Navbar"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginNow = async () => {

    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,
      {
        email: email,
        password: password
      })

    if (response.data.success) {
      toast.success(response.data.message)

      localStorage.setItem('currentUser', JSON.stringify(response.data.data))

      toast.loading(`Redirecting to dashboard`)

      setTimeout(() => {
          window.location.href = "/"
      }, 1000)

    }
    else {
      toast.error(response.data.message)
    }

  }
  return (
    <>

    <Navbar/>
      <h1 className="auth-heading">User Login Here</h1>
      <form className="auth-form">
        <input type="email"
          placeholder="Enter your Email"
          className="user-input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }} />

        <input type="password"
          placeholder="Enter your Password"
          className="user-input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />

        <button type="button" className="auth-btn" onClick={loginNow}>Login Here</button>

      </form>
      <Link to="/signup" className="auth-link">Don't have an account ? <span className="account-auth">Signup</span> </Link>
      <Toaster />
    </>
  )
}

export default Login





