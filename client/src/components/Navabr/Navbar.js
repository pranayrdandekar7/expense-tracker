// import "./Navbar.css"
// import logo from "./expense.png"

// function Navbar() {
//     return (
//         <>

//             <div className="navbar-container">
//                 <img src={logo} alt="logo" className="navbar-logo" />
//                <div className="navbar-item-container">
//                 <span className="navbar-item">Home</span>
//                 <span className="navbar-item">About</span>
               
//                 <span  className="navbar-item">+ Transactions</span>
//                 <span className="navbar-item">Signup</span>
//                 </div>
//             </div >

//         </>
//     )
// }

// export default Navbar

import "./Navbar.css"
import logo from "./expense.png"

import {Link} from 'react-router-dom';
import menuicon from "./menu-icon.png"
import { useState } from 'react';




function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (<>
    
    <div className="navbar-container "  >
    <div className='logo-container'>
        <img src={logo} className='logo' alt="logo"/>

          <img src={menuicon} className='menuicon' alt="logo" onClick={toggleMenu}/>
          </div>

         {/* for small device */}
         {
          isMenuOpen ?
         <div className='menu-icon-container'>
            <Link to="/" className='menu-navbar-item'>Home</Link>
            <Link to="/about" className='menu-navbar-item'>About</Link>
    
            <Link to="/add-transaction"className='menu-navbar-item'>+ Transaction</Link>
            <Link to="/signup" className='menu-navbar-item'>Sign Up</Link>
           
            
          </div>: null}
       
        <div className='nav-item-container '>
         <Link to="/" className='nav-item'>Home</Link>
         <Link to="/about"  className='nav-item'>About</Link>
         
         <Link to="/add-transaction"className='nav-item'>+Transaction</Link>
         <Link to="/signup" className='nav-item'>Signup</Link>
        
       </div>
       <div>
         <Link to='/login' className='login '>Logout</Link>
       </div>
    </div> 
    </>
  )
}


export default Navbar