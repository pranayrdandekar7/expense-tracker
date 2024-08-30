import "./Footer.css"
import { Link } from "react-router-dom"
import logo from "./../Navbar/expense.png"
import mobileIcon from "./Footer_icon/phone-call.png"
import emailIcon from "./Footer_icon/email.png"
// import facebookIcon from "./Footer_icon/facebook.png"
import instagramIcon from "./Footer_icon/instagram.png"
import watsappIcon from "./Footer_icon/whatsapp.png"

function Footer() {
    return (

        <div className="footer">
            <div>
                <img src={logo} className="footer-logo" alt="logo" />
            </div>
            <div className="footer-quick-links">
                <span className="Links-heading"> <u>Quick Links </u></span>
                <Link to={"/"} className="links-item">Home</Link>
                <Link to={"/about"} className="links-item">About</Link>
                <Link to={"/add-transaction"} className="links-item">Add Transactions</Link>

            </div>
            <div className="footer-quick-links">
                <span className="Links-heading"> <u>Usefull  Links </u></span>
                <span className="links-item">Terms And Conditions</span>
                <span className="links-item">Privacy Policy</span>

            </div>
            <div className="contact-container">
                <span className="Links-heading"><u>Contact Us </u> :-</span>
                <span className="contact-item"> Pranay Dandekar,</span>
                <span className="contact-item">At Hadapsar , Pune , </span>
                <span className="contact-item">411028</span>

                <div className="footer-icon-container">
                    <a href="tel:9921213852" target="_blank"><img src={mobileIcon} className="footer-icon" /></a>
                    <a href="mailto:pranayrdandekar7@gmail.com" target="_blank"><img src={emailIcon} className="footer-icon" /></a>
                    {/* <a href="" target="_blank"><img src={"facebookIcon"} className="footer-icon" /></a> */}
                    <a href="https://www.instagram.com/pranay.dandekar2?igsh=NnJ1ZXM5NnR1ZGht" target="_blank"><img src={instagramIcon} className="footer-icon" /></a>
                    <a href="https://wa.me/message/4L65XJ2BYYVDF1" target="_blank"><img src={watsappIcon} className="footer-icon" /></a>

                </div>
            </div>
            <div className="footer-copy-right">All rights reserved @ Pranay Dandekar 2024</div>
        </div>
    )
}

export default Footer