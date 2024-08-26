import "./TransactionsCard.css"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

function TransactionsCard({ _id, title, amount, category, type, createdAt, loadTransaction }) {

  const deleteTransaction = async () => {

    const deleteconfirm = window.confirm(`are you sure to delete this transaction`)
    console.log(deleteconfirm)

    if (deleteconfirm) {
      try {
        const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/transaction/${_id}`)
        toast.success(response.data.message)

        loadTransaction()
      }

      catch (e) {
        toast.error(`there was an error deleting the transaction`)
      }
    }
    else {
      toast.error(`transaction is not deleted`)
    }

  }

  return (
    <div className="transaction_card">
      <h1 className="transaction-card-title">{title.toUpperCase()}</h1>

      <span className="transaction-cart-time">
        {new Date(createdAt).toLocaleString()}
      </span>

      <span className="transaction-card-category">
        {category}
      </span>

      <span className="transaction-card-amount"
        style={{ color: type === "credit" ? "green" : "red" }}>
        {type === "credit" ? "+" : "-"}
        {amount}</span>

      <button type="button" className="deleteBtn" onClick={deleteTransaction}>Delete</button>

      <Toaster />

    </div>
  )
}

export default TransactionsCard