import "./TermsAndConditions.css"
import React, { useState } from 'react';
import toast from "react-hot-toast"


const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    
    toast.success(`Terms and condition accepted`)
    setTimeout(()=>{
      window.location.href="/"
    },2000)
     

  };

  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to our Expense Tracker! By using our service, you agree to the following terms and conditions:
      </p>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using our website and services, you agree to comply with and be bound by these terms and conditions.
      </p>
      <h2>2. Use of Service</h2>
      <p>
        You agree to use our service only for lawful purposes and in accordance with our guidelines.
      </p>
      <h2>3. Privacy Policy</h2>
      <p>
        We value your privacy. Our Privacy Policy outlines how we collect, use, and protect your information.
      </p>
      <h2>4. Changes to Terms</h2>
      <p>
        We may update these terms from time to time. You are encouraged to review these terms periodically for any changes.
      </p>
      <h2>5. Contact Us</h2>
      <p>
        If you have any questions or concerns about these terms, please contact us at support@example.com.
      </p>
      <div className="accept-section">
        <button
          className="auth-btn"
          onClick={handleAccept}
          disabled={accepted}
        >
          {accepted ? 'Accepted' : 'Accept Terms'}
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
