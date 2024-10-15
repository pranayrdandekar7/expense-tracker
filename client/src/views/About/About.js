import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import headerImage from "./About-icon/about-header2.jpg"
import "./About.css"
import own_pic from "./About-icon/pranay img.jpeg"
import emailIcon from "./About-icon/gmail.png"
import linkdinIcon from "./About-icon/linkdine12.png"
import githubIcon from "./About-icon/github-sign.png"



function About() {
  return (<>
    <Navbar />
    <h2 className='about-heading'>ABOUT EXPENSE TRACKER</h2>
    <div className='about-conatiner'>

      <img src={headerImage} className='header-img' />

      <div className='about-us-lines-container'>

        <span className='about-us-lines'>
          Managing your finances has never been easier! Our Expense Tracker is designed to help you take control of your money by keeping track of your spending, budgeting, and savings all in one place. Whether you're managing daily expenses, planning for big purchases, or setting financial goals, our tool offers a simple and efficient way to monitor where your money goes.</span><br /><br />

        <span className='about-us-lines'>With user-friendly features and real-time tracking, our platform helps you gain insights into your spending patterns, so you can make smarter financial decisions. Say goodbye to financial stress and hello to a clearer financial future. </span><br /><br />

        <span className='about-us-lines'> Start tracking today, and take the first step toward financial freedom!</span>
      </div>
    </div>
    <div className='owner-card'>
      <img src={own_pic} className='developer-img'/>
      <span className='card-owner-name'>PRANAY DANDEKAR</span>
      <span className='card-owner-profession'>Software Developer</span>
      <div className='about-card-icon-container'>
      <a href="mailto:pranayrdandekar7@gmail.com" target="_blank"><img src={emailIcon} className="about-card-icon" /></a>
      <a href="www.linkedin.com/in/pranayrdandekar7" target="_blank"><img src={linkdinIcon} className="about-card-icon" /></a>
      <a href="https://github.com/pranayrdandekar7" target="_blank"><img src={githubIcon} className="about-card-icon" /></a>
      </div>
    

    </div>
    <Footer />
  </>

  )
}

export default About