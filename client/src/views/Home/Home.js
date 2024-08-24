import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import "./Home.css"
import axios from "axios"
import TransactionsCard from "../../components/TransactionsCard/TransactionsCard"


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
      <h1 className="main-heading">Hello , {user.fullname}</h1>
      <h1 className="home-greeting">Welcome To The Expense Tracker</h1>

      <span className="logout-btn" onClick={() => {
        localStorage.clear()
        toast.success(`Loged out successfully`)

        setTimeout(() => {
          window.location.href = "/login"
        }, 1000)


      }}>Logout</span>

      <div className="net-transactions-card-container">
        <div className="net-transactions-card-item">
          <span className="net-transaction-cart-amout">
            {netIncome} ₹ 
          </span>
          <span className="net-transaction-card-title">
            Total Income
          </span>
        </div>

        <div className="net-transactions-card-item">
          <span className="net-transaction-cart-amout">
            {netExpense} ₹ 
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
            Totol Balance
          </span>
        </div>
      </div>


     <div className="transaction-card-container">
      {
        transactions.map((transaction) => {
          const { _id, title, amount, category, type, createdAt } = transaction
          return (<TransactionsCard
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
      <Toaster />
    </>
  )
}

export default Home