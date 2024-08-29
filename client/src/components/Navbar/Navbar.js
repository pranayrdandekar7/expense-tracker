
import "./Navbar.css"
import logo from "./expense.png"

import { Link } from 'react-router-dom';
import menuicon from "./menu-icon.png"
import { useState } from 'react';
import toast, { Toaster } from "react-hot-toast"


function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (<>

        <div className="navbar-container "  >
            <div className='logo-container'>
               
                <img src={logo} className='logo' alt="logo" />
                <span className="navbar-brand-name">Expense Tracker</span>

                <img src={menuicon} className='menuicon' alt="logo" onClick={toggleMenu} />
            </div>

            {/* for small device */}
            {
                isMenuOpen ?
                    <div className='menu-icon-container'>
                        <Link to="/" className='menu-navbar-item'>Home</Link>
                        <Link to="/about" className='menu-navbar-item'>About</Link>
                        <Link to="/add-transaction" className='menu-navbar-item'>+ Transaction</Link>
                        <Link to="/signup" className='menu-navbar-item'>Sign Up</Link>
                        <span className='menu-navbar-item' onClick={() => {
                            localStorage.clear()
                            toast.success(`Logged out successfully!!`)
                            setTimeout(() => {
                                window.location.href = "/login"
                            }, 2000)
                        }}>Logout</span>

                    </div> : null}

            <div className='nav-item-container '>
                <Link to="/" className='nav-item'>Home</Link>
                <Link to="/about" className='nav-item'>About</Link>
                <Link to="/add-transaction" className='nav-item'>+Transaction</Link>
                <Link to="/signup" className='nav-item'>Signup</Link>
            </div>

            <span className="login" onClick={() => {
                 localStorage.clear()
                toast.success(`Loged out successfully`)
            
                setTimeout(() => {
                    window.location.href = "/login"
                }, 2000)


            }}>Logout</span>
        </div> 
        
    </>
   
    )
}


export default Navbar