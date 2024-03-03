import React from 'react';
import './WelcomePopup.css';

const WelcomePopup = ({ onClose }) => {
    return (
        <div className="welcome-popup">
        <img className='advt_img' src="https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/others_Main%2FchristImg.jpg?alt=media&token=17934020-593d-4122-84a7-841f282c3202"/>  
        <h2>Welcome to the Miraculous Family!</h2>
        <p>Welcome to our church family! We're delighted you've chosen to connect with us. Whether you're seeking spiritual growth, community, or meaningful connections, you're in the right place. Take your time exploring our website; it's filled with resources to support you on your journey. From engaging in discussions to participating in worship services, there's something for everyone. Our inclusive community embraces diversity and welcomes individuals from all backgrounds. Together, we strive to create a nurturing environment where you can flourish spiritually and personally. Thank you for joining us on this journey of faith, fellowship, and discovery. We're excited to walk alongside you as you explore, learn, and grow with us. Welcome, and may your time here be enriching and fulfilling</p>
        <button onClick={onClose}>Close</button>
    </div>
    
    );
};

export default WelcomePopup;
