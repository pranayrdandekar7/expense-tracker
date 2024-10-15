import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import headerImage from "./about-header2.jpg"
import "./About.css"

function About() {
  return (<>
    <Navbar />
    <h2 className='about-heading'>ABOUT EXPENSE TRACKER</h2>
    <div className='about-conatiner'>
      
    <img src={headerImage} className='header-img' />

    <div className='about-us-lines-container'>
      
      <span className='about-us-lines'>
        Managing your finances has never been easier! Our Expense Tracker is designed to help you take control of your money by keeping track of your spending, budgeting, and savings all in one place. Whether you're managing daily expenses, planning for big purchases, or setting financial goals, our tool offers a simple and efficient way to monitor where your money goes.</span><br/><br/>

        <span className='about-us-lines'>With user-friendly features and real-time tracking, our platform helps you gain insights into your spending patterns, so you can make smarter financial decisions. Say goodbye to financial stress and hello to a clearer financial future. </span><br/><br/>

       <span className='about-us-lines'> Start tracking today, and take the first step toward financial freedom!</span>
    </div>
    </div>
    <Footer />
  </>

  )
}

export default About