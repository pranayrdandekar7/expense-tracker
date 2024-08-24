import "./TransactionsCard.css"

function TransactionsCard({_id,title,amount,category,type,createdAt}) {
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
     style= {{ color: type==="credit" ? "green" : "red" }}>
      {type=== "credit" ? "+" : "-"}
       {amount}</span>



    </div> 
  )
}

export default TransactionsCard