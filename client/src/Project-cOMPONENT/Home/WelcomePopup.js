import React from 'react';
import './WelcomePopup.css';

const WelcomePopup = ({ onClose }) => {
    return (
        <div className="welcome-popup">
        <img className='advt_img' src="https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/others_Main%2FchristImg.jpg?alt=media&token=17934020-593d-4122-84a7-841f282c3202"/>  
        <h2>Welcome to the Miraculous Family!</h2>
        <p>Welcome to our church family! We're thrilled you're here. Explore our website for spiritual growth resources, engaging discussions, and worship services. Together, let's create a nurturing environment where you can flourish spiritually and personally. Thank you for joining us on this journey of faith, fellowship, and discovery. We're excited to walk alongside you as you explore, learn, and grow with us. Welcome, and may your time here be enriching and fulfilling in Jesus name, Amen.</p>
        <button onClick={onClose}>Close</button>
    </div>
    
    );
}; 

export default WelcomePopup;
