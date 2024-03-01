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


    const LogoRedirect = ()=>{
        document.querySelector('.mobileLogo').addEventListener('click',()=>{
            window.location = '/'
        })
    }
    LogoRedirect()
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
                           <h4 className=''><span>T</span>HE <span>C</span>HRIST <span>M</span>IRACLE <span>C</span>HURCH <span>I</span>NTERNATIONAL <br/> <span>A</span>KA  <br/> <span>C</span>HRIST <span>S</span>TANDARD</h4>
                         </div>
                        <div className='toggleIcon animate__animated animate__slower animate__zoomInDown'>
                            <img className='menu__bar' src={require('../../pic/menu.svg')}/>
                        </div>
                   </header>
                    <nav className='nav-links animate__animated animate__bounceInLeft animate__slower'>
                        <ul >
                            <li><a href='/'>HOME</a></li>
                            <li><a href='/aim'>OUR AIMS</a></li>
                            <li><a href='/mission'>MISSIONS</a></li>
                            <li><a href='/books'>BOOKS</a></li>
                            <li><a href='/audio'>AUDIOS</a></li>
                            <li><a href='/videos'>VIDEOS</a></li>
                            <li><a href='/mission_pictures'>MISSION PICTURES</a></li>
                            <li><a href='/contact'>CONTACT-US</a></li>
                            <li><a href='https://chat.whatsapp.com/KrglPK7cnSx0NoDHharKe7'><i class="fab fa-whatsapp "></i></a></li>
                        </ul>
                    </nav>
                </div> 
                <div className='showText'>
                       <marquee className='marqueeText'>
                           <p>AD 2024 Have Been Declare as Our Year Of  All Round Divine Blessings </p>
                           <p>January 21 Fasting and Thanks Given with Testimony</p>
                           <p>Up Coming Next Mission  Evanglisim </p>
                           <p>The purpose of THE CHRIST MIRACLES CHURCH INT is to enrich and multiply life and hope through disciple-making in the name of Our Lord and Savior Jesus Christ.</p>
                           <p>Worhsip with us</p>
                           <p>TUEDAY: BIBLE STUDY, TIME 5:00 PM TO 8:30 PM</p>
                           <p>FRIDAY: MIRACLES PRAYER REVIVAL PRAYERS, TIME 5:00 PM TO 8:30 PM </p>
                           <p>SUNDAY SERVICE: TEMA Comm.9 Breach , TIME 7:30 am TO 12:00 AM</p>
                           <p>SUNDAY SERVICE: ACCRA Dodowa Breach , TIME 8:30 am TO 12:30 AM</p>
                           <p>Contact-us call</p>
                           <p>Contact-us 0554928021</p>
                           <p>Contact-us 0546398300</p>
                           <p>Join Next Mission Outreach Evanglisim</p>
                           
                       </marquee>
                </div>
            </div>
         );
    }
}
 
export default NavbarMain;