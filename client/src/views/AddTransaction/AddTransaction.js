import { useEffect, useState } from 'react'
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"

function AddTransaction() {

    const [user, setUser] = useState("")
    const [title, setTitle] = useState("")
    const [type, setType] = useState("credit")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")


    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))

        if (currentUser) {
            setUser(currentUser)
            console.log(user)
        }
        if (!currentUser) {
            window.location.href = "/login"
        }
    }, [])

    const addTransaction = async () => {


        if (!title || !amount || !category || !type || !user) {

            toast.error(`All feilds are mandatory`)
            return;

        }


        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/transaction`, {
            title,
            amount,
            type,
            category,
            user: user._id
        })

        if (response) {
            toast.success(`Transaction saved successfully`)


            setTitle("")
            setAmount(0)
            setType("credit")
            setCategory("learning")

            setTimeout(() => {
                window.location.href = "/"
            }, 1000)

        }
    }

    return (
        <>
            <div>
                <h2 className='home-greeting'>Add Transaction  For {user.fullname} </h2>

                <form className="auth-form">
                    <input type="text"
                        placeholder="Title"
                        className="user-input"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);

                        }} />

                    <input type="text"
                        placeholder="Amount"
                        className="user-input"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value);

                        }} />
                    <select className="user-input" value={type} onChange={(e) => {
                        setType(e.target.value);

                    }}>
                        <option value="credit">Income</option>
                        <option value="debit">Expense</option>
                    </select>

                    <select className="user-input" value={category} onChange={(e) => {
                        setCategory(e.target.value);

                    }}>
                        <option>Category</option>
                        <option value="Food">Food</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Utilies">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Health">Health</option>
                        <option value="Salary">Salary</option>
                        <option value="Rent">Rent</option>

                    </select>

                    <button type='button' className="auth-btn" onClick={addTransaction}>
                        Add transactions
                    </button>


                </form>
                <Toaster />
            </div>

        </>
    )
}

export default AddTransaction