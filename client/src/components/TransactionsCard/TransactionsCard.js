import "./TransactionsCard.css"

function TransactionsCard({_id,title,amount,category,type,createdAt}) {
  return (
    <div className="transaction_card">
    <h1 className="transaction-card-title">{title.toUpperCase()}</h1>

    <span className="transaction-card-amount">
      {type=== "credit" ? "+" : "-"}
       {amount}</span>

       
    </div> 
  )
}

export default TransactionsCard