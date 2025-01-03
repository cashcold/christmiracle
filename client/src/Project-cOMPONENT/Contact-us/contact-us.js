import React, { Component } from 'react';
import './style.css'
class ContactMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='mainContact'>
                <section className='contactNow'>
                <div className='bothAll'>
                        <div className='bothSupportA'>
                            <div className='bothMenu bothMenuCount1' >
                                <div className='supportInfo'>
                                    <img src={require('../../pic/email.png')}  className='blink_me'/>
                                    <h4  className='blink_me'>OUR E-MAIL</h4>
                                    <p>thechristmiracleschurch@gmail.com</p>
                                </div>
                            </div>
                            <div className='bothMenu bothMenuCount2' >
                                <div className='supportInfo'>
                                    <img src={require('../../pic/telephone.png')}  className='blink_me'/>
                                    <h4 className='blink_me'>PHONE NUMBERS </h4>
                                    <p>+233554928021</p>
                                    <p>+233546398300</p>
                                </div>
                            </div>
                            <div className='bothMenu bothMenuCount3'>
                                <div className='supportInfo'>
                                    <img src={require('../../pic/location.png')} className='blink_me'/>
                                    <h4  className='blink_me'>ADDRESS LINE</h4>
                                    <p>GHANA TEMA COMMMUNITY 9 OPPOSITE SUPPER PAPER </p>
                                </div>
                            </div>  
                        </div>
                        <div className='bothSupportB'>
                            <div className='supportLine'>
                                <div className='supportNow'>
                                    <div className='lineSupport'>
                                        <h5>SEND US A MESSAGE</h5>
                                        <p>Get in touch with us any time you need an assistance. We are available 24/7 to answer your queries, fix any  issues you encounter, and guide you with anything you need to grow your Spirit Man.</p>
                                    </div>
                                </div>
                                <div className='contactDiv'>
                                   <div className='formA'>
                                        <form className='myFormControl'>
                                            <div className='myForms'>
                                                <input type='text' name='name' placeholder='Name'/>
                                            </div>
                                            <div className='myForms'>
                                                <input type='email' name='name' placeholder='Email'/>
                                            </div>
                                            <div className='myForms'>
                                                <textarea name='message' placeholder='Message Us'></textarea>
                                            </div>
                                            <a href='' className='btn btn-success contactBtn'>Send</a>
                                        </form>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default ContactMain;