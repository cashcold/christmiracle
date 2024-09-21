import React, { Component } from 'react';
import './RequestPopup.css';

class RequestPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPhoneNumbers: false,
        };
    }

    handleTogglePhoneNumbers = () => {
        this.setState(prevState => ({
            showPhoneNumbers: !prevState.showPhoneNumbers
        }));
    };

    render() {
        const { onClose } = this.props;
        const { showPhoneNumbers } = this.state;

        return (
            <div className="welcome-popup">
               
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
                <button onClick={this.handleTogglePhoneNumbers}>
                    {showPhoneNumbers ? 'Hide Phone Numbers' : 'Get Phone Numbers'}
                </button>

                {showPhoneNumbers && (
                    <div className="phone-numbers">
                        <h4>PHONE NUMBERS</h4>
                        <p>+233554928021</p>
                        <p>+233546398300</p>
                    </div>
                )}

                <button onClick={onClose}>Close</button>
            </div>
        );
    }
}

export default RequestPopup;
