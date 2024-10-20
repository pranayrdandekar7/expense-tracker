import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import "./Home.css"
import axios from "axios"
import TransactionsCard from "../../components/TransactionsCard/TransactionsCard"
import AddTransactionIcon from "./add-transaction-icon.png"
import { Link } from "react-router-dom"
import Navbar from "./../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"



function Home() {

  const [user, setUser] = useState("")

  const [transactions, setTransaction] = useState([])

  const [netIncome, setNetIncome] = useState(0)

  const [netExpense, setNetExpense] = useState(0)

  useEffect(() => {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
      setUser(currentUser)

    }
    if (!currentUser) {
      window.location.href = "/login"
    }
  }, [])

  const loadTransaction = async () => {
    if (!user._id) {
      return
    }

    toast.loading(`Loading Transactions...`)
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/transactions?userId=${user._id}`)
    toast.dismiss()
    setTransaction(response.data.data)
  }

  useEffect(() => {
    loadTransaction()
  }, [user])

  useEffect(() => {
    let income = 0;
    let expense = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "credit") {

        income += transaction.amount
      }
      else {
        expense += transaction.amount
      }
    })

    setNetIncome(income)
    setNetExpense(expense)

  }, [transactions])



  return (
    <>
    <Navbar/>
      <span className="main-heading">Hello , {user?.fullname?.toUpperCase()}</span>
      <span className="home-greeting">Welcome To The Expense Tracker</span>

    

      <div className="net-transactions-card-container">
        <div className="net-transactions-card-item">
          <span className="net-transaction-cart-amout">
            + {netIncome} ₹
          </span>
          <span className="net-transaction-card-title">
            Total Income
          </span>
        </div>

        <div className="net-transactions-card-item">
          <span className="net-transaction-cart-amout">
            - {netExpense} ₹
          </span>
          <span className="net-transaction-card-title">
            Total Expense
          </span>
        </div>
        <div className="net-transactions-card-item">
          <span className="net-transaction-cart-amout">
            {netIncome - netExpense} ₹
          </span>
          <span className="net-transaction-card-title">
            Total Balance
          </span>
        </div>
      </div>


      <div className="transaction-card-container">
        {
          transactions.map((transaction) => {
            const { _id, title, amount, category, type, createdAt } = transaction
            return (<TransactionsCard
              _id={_id}
              key={_id}
              title={title}
              amount={amount}
              category={category}
              type={type}
              createdAt={createdAt}
              loadTransaction={loadTransaction}
            />
            )
          })
        }
      </div>
      <div className="home-footer-container">
      <Link to="/add-transaction">
        <img src={AddTransactionIcon} alt="add-transcation-icon" className="add-transaction-icon" />
      </Link>

      <Footer className="home-footer"/>
      </div>
    </>
  )
}

export default Home