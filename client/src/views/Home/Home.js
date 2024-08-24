import { useEffect, useState } from "react"
import toast,{Toaster} from "react-hot-toast"
import "./Home.css"
import axios from "axios" 
import TransactionsCard from "../../components/TransactionsCard/TransactionsCard"


function Home() {

  const [user,setUser] =useState("")

const [transactions,setTransaction] =useState([])

  useEffect(() => {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if(currentUser){
      setUser(currentUser)

    }
    if(!currentUser){
      window.location.href="/login"
    }
  } ,[])

const loadTransaction = async ()=>{
  if (!user._id){
    return
  }

  toast.loading(`Loading Transactions...`)
  const response= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/transactions?userId=${user._id}`)
   toast.dismiss()
  setTransaction(response.data.data)
}

useEffect(()=>{
  loadTransaction()
},[user])



  return (
    <>
    <h1>Hello {user.fullname}</h1>
    <h1 className="main-heading">Welcome to the Expense Tracker</h1>

    <span className="logout-btn" onClick={()=>{
      localStorage.clear()
      toast.success(`Loged out successfully`)

      setTimeout(()=>{
         window.location.href="/login"
      },1000)
    
      
    }}>Logout</span>

    {
      transactions.map((transaction)=>{
        const {_id,title,amount,category,type,createdAt} = transaction
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
    <Toaster/>
    </>
  )
}

export default Home