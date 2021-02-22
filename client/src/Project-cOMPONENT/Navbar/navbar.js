import React, { Component } from 'react';
import './style.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
class NavbarMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showText: ''
         }
    }
   componentDidMount(){
    setTimeout(()=>{
        toast.success('Master Jesus Welcomes You')
    },8000)
    setTimeout(()=>{
        toast.success('TUEDAY: BIBLE STUDY, TIME 5:00 PM TO 8:00 PM')
    },14000)
    setTimeout(()=>{
        toast.success('FRIDAY: PRAYER REVIVAL MEETING, TIME 5:00 PM TO 8:00 PM')
    },20000)
    setTimeout(()=>{
        toast.success('SUNDAY SERVICE: Comm.9 Breach , TIME 7:30 am TO 11:40 PM')
    },30000)
    setTimeout(()=>{
        toast.success('SUNDAY SERVICE: Lience Office Breach , TIME 7:00 am TO 11:30 PM')
    },40000)

    const ToggleBtn = ()=>{
        const btnNow = document.querySelector('.toggleIcon')
        const navLinks = document.querySelector('.nav-links')
        btnNow.addEventListener('click',()=>{
            if(navLinks.style.display === 'none'){
                navLinks.style.display = 'block'
            }else{
                navLinks.style.display = 'none'
            }
        })
    }
    ToggleBtn()
   }
    render() { 
        return ( 
            <div className='mainNavbar '>
                <div className='main-nav'>
                    <div className='mobileLogo'>
                    <img src={require('../../pic/christImg.jpg')}/>
                    </div>
                    <ToastContainer/>
                   <header className='header'>
                       <div className='logo'>
                           <img src={require('../../pic/christImg.jpg')}/>
                           <h1 className=' animate__animated animate__slower animate__flash'><span>T</span>HE <span>C</span>HRIST <span>M</span>IRACLE <br/>  <span>C</span>HURCH <span>I</span>NTERNATION</h1>
                       </div>
                        <div className='toggleIcon animate__animated animate__slower animate__zoomInDown'>
                        <i class="fas fa-bars fa-3x navIcon"></i>
                        </div>
                   </header>
                    <nav className='nav-links animate__animated animate__bounceInLeft animate__slower'>
                        <ul >
                            <li><a href='/'>HOME</a></li>
                            <li><a href='/aim'>AIM</a></li>
                            <li><a href='/mission'>MISSION</a></li>
                            <li><a href='/message'>MESSAGE</a></li>
                            <li><a href='/audio'>AUDIO</a></li>
                            <li><a href='/contact'>CONTACT-US</a></li>
                            <li><a href='/pictures'>PICTURES</a></li>
                            <li><a href='/https://chat.whatsapp.com/KFQDuv2Ys4b9ylAsAufaro'><i class="fab fa-whatsapp "></i></a></li>
                        </ul>
                    </nav>
                </div> 
                <div className='showText'>
                       <marquee className='marqueeText'>
                           <p>AD 2021 Have Been Declare as  Great Abundance</p>
                           <p>January 21 Fasting and Thanks Given with Testimony</p>
                           <p>Up Coming Next Mission  Evanglisim on March</p>
                           <p>The purpose of THE CHRIST MIRACLE CHURCH INT is to enrich and multiply life and hope through disciple-making in the name of Our Lord and Savior Jesus Christ.</p>
                           <p>We wish to invite you and your friends or relatives to join us and worhsip the lord </p>
                           <p>Worhsip with us</p>
                           <p>TUEDAY: BIBLE STUDY, TIME 5:00 PM TO 8:30 PM</p>
                           <p>FRIDAY: PRAYER REVIVAL MEETING, TIME 5:00 PM TO 8:30 PM </p>
                           <p>SUNDAY SERVICE: Comm.9 Breach , TIME 7:30 am TO 11:40 AM</p>
                           <p>SUNDAY SERVICE: Lience Office Breach , TIME 7:30 am TO 11:40 AM</p>
                           <p>Contact-us 0547695813</p>
                           <p>Contact-us 0547300887</p>
                           <p>Join Next Mission Outreach Evanglisim</p>
                           
                       </marquee>
                </div>
            </div>
         );
    }
}
 
export default NavbarMain;