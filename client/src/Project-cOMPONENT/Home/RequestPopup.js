import React from 'react';
import './RequestPopup.css';

const RequestPopup = ({ onClose }) => {
    return (
        <div className="welcome-popup">
        <img className='advt_img' src="https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/others_Main%2FchristImg.jpg?alt=media&token=17934020-593d-4122-84a7-841f282c3202"/>  
        <h2>Request Prayer & Counseling</h2>
            <p>
        Are you facing challenges or seeking clarity in your spiritual journey? Don't walk alone.
        <strong> The spiritual man of God is here to provide you with the wisdom, support, and divine intervention you need.</strong>
        </p>
        <p>
        Whether you're struggling with a personal issue, looking for direction, or simply in need of prayer, we invite you to reach out.
        <strong> This is your opportunity to connect with a true servant of God, dedicated to helping you navigate life's challenges through faith and prayer.</strong>
        </p>
        <p>
        Allow the power of prayer and spiritual guidance to bring peace, healing, and direction into your life. 
        <strong> Take the first step today and experience the transformative power of God's love and wisdom.</strong>
        </p>
        <button onClick={onClose}>Close</button>
    </div>
    
    );
}; 

export default RequestPopup;
