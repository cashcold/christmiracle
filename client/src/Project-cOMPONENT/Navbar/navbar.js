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
                            <img className='menu__bar' src="https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/Others%2F6507107.webp?alt=media&token=f83f1338-af79-4f51-9ecf-ba5db61f47e2"/>    
                        </div>
                   </header>
                    <nav className='nav-links animate__animated animate__bounceInLeft animate__slower'>
                        <ul >
                            <li><a href='/'>HOME</a></li>
                            <li><a href='/aim'>OUR AIMS</a></li>
                            <li><a href='/mission'>MISSIONS</a></li>
                            <li><a href='/books'>BOOKS</a></li>
                            <li><a href='/music'>MUSIC</a></li>
                            <li><a href='/videos'>VIDEOS</a></li>
                            <li><a href='/mission_pictures'>MISSION PICTURES</a></li>
                            <li><a href='/contact'>CONTACT-US</a></li>
                            <li><a href='https://chat.whatsapp.com/KrglPK7cnSx0NoDHharKe7'><i class="fab fa-whatsapp "></i></a></li>
                        </ul>
                    </nav>
                </div> 
                <div className='showText'>
                       <marquee className='marqueeText'>
                        <p>Peace be unto you all</p>
                           <p>AD 2024 Have Been Declare as Our Year Of  All Round Divine Blessings </p>
                           <p>The purpose of THE CHRIST MIRACLES CHURCH INT is to enrich and multiply life and hope through disciple-making in the name of Our Lord and Savior Jesus Christ.</p>
                           <p>🎂 Church Birthday Celebration: This month, we joyfully commemorate the anniversary of the founding of our church. Over the years, we have witnessed the faithfulness of God as He has guided and sustained us through every season. Let us take this opportunity to reflect on the blessings, growth, and transformation that our church has experienced, and to give thanks for the countless lives touched and transformed by the power of God's love</p>
                           <p>Up Coming Next Mission  Evanglisim </p>
                           <p>Worhsip with us</p>
                           <p>TUEDAY: BIBLE STUDY, TIME 5:30 PM TO 9:00 PM</p>
                           <p>FRIDAY: MIRACLES REVIVALS PRAYERS , TIME 5:30 PM TO 9:00 PM </p>
                           <p>SUNDAY SERVICE: TEMA Comm.9 Branch , TIME 7:30 am TO 12:00 PM</p>
                           <p>SUNDAY SERVICE: ACCRA Dodowa Branch , TIME 8:30 am TO 12:30 PM</p>
                           <p>🇬🇭 Ghana's Independence Day: March 6th marks the historic day when Ghana, our beloved nation, declared its independence and embarked on a journey of sovereignty, freedom, and self-determination. As proud citizens of Ghana, let us honor the sacrifices of our forebears and celebrate the progress, unity, and resilience that define our great nation. May we continue to uphold the values of peace, justice, and equality as we work together to build a brighter future for generations to come.</p>
                           <p>As we gather in celebration and gratitude, let us also renew our commitment to serving God and our community with love, compassion, and humility. Together, let us press forward in faith, knowing that with God, all things are possible.</p>
                           <p>Join us throughout the month as we commemorate these special occasions with worship services, prayer gatherings, and acts of service to our community. Let us come together in unity and praise, giving thanks for the blessings of our church and our nation.May God continue to bless our church, our nation, and each and every one of us as we journey together in faith and fellowship.With love and blessings,</p>
                           <p>Contact-us call</p>
                           <p>Contact-us 0554928021</p>
                           <p>Contact-us 0546398300</p>
                           <p>Join Next Mission Outreach Evanglisim</p>
                           <p></p>
                           
                       </marquee>
                </div>
            </div>
         );
    }
}
 
export default NavbarMain;