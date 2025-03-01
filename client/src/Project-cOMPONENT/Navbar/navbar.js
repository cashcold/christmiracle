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
                            <li><a href='Resources'>RESOURCES</a></li>
                        </ul>
                    </nav>
                </div> 
                <div className='showText'>
                       <marquee className='marqueeText'>
                        <p>Peace be unto you all 🕊️✨🌍</p>
                            <p>AD 2025 Has Been Declared as Our Year of Resounding Victories 🎉🏆🔥</p>
                            <p>🚀✨ March: Our Month of **His Presence** ✝️🔥🕊️</p>


                           {/* <p>December is our month of Extraordinary wonders</p> */}
                           <p>The purpose of THE CHRIST MIRACLES CHURCH INT is to enrich and multiply life and hope 🌱💫🙏 through disciple-making 🕊️📖 in the name of Our Lord and Savior Jesus Christ ✝️🙌💖.</p>

                           <p>The 7 "I AM" Statements of Jesus (John's Gospel) ✝️🌿:
                            🔹 Bread of Life 🍞💖
                            🔹 Light of the World 🌞🔦✨
                            🔹 The Door 🚪✨🔑
                            🔹 Good Shepherd 🐑❤️🌾
                            🔹 Resurrection and Life ⚡🌿🌟
                            🔹 Way, Truth, Life ✝️📖🚶‍♂️
                            🔹 True Vine 🍇🌱🍃

                            #JesusIsLord #IAm #WayTruthLife #BreadOfLife 🌟🕊️🔥</p>
                           <p>The Beatitudes (Matthew 5:3-12) 🕊️✨ declare, "Blessed are the poor in spirit, for theirs is the kingdom of heaven..." and continue with blessings for the merciful 💖🤲🕊️, the pure in heart 👀✨💫, the peacemakers 🕊️👑🌍, those who hunger and thirst for righteousness 🍞💦🙏, and those who are persecuted for righteousness' sake 🌍🔥⚔️, for theirs is the kingdom of heaven, guiding us to live a blessed, kingdom-focused life in Christ. #Blessed #KingdomLiving #Beatitudes #WalkWithChrist ✝️🌟👑</p>
                           <p>🌿🍇 The Fruit of the Spirit 🍎✨ The Fruit of the Spirit—❤️ Love, 😊 Joy, 🕊 Peace, ⏳ Patience, 🤝 Kindness, 🌟 Goodness, 🙏 Faithfulness, 🤲 Gentleness, and ⚖ Self-Control (Galatians 5:22-23)—is the evidence of a life transformed by Christ. As we walk in the Spirit, we reflect His character, bearing these fruits daily 🌍✨. Stay connected to Jesus, the True Vine 🍇, and let His light shine through you! 🌞🌿#FruitOfTheSpirit 🍎 #HolySpirit 🕊 #ChristianLife ✝️ #FaithInAction 🙌 #TCMCI ⛪ #JesusIsLord</p>
                          <p>The foundation of our faith is rooted in God's eternal truth: The Internal Godhead—Father 👑, Son ✝️, and Holy Spirit 🕊️; The Fall of Man 🍎🚫 and The Plan of Redemption 💖🩸; Salvation Through Grace 🙌✨, Repentance & Acceptance 🔄💡, and The New Birth 🌱💦; living a Daily Christian Life 🚶‍♂️📖, partaking in Baptism of Water & The Lord's Supper 🌊🍷🍞, and receiving The Baptism of the Holy Spirit 🔥🕊️; embracing The Spirit-Filled Life 🌬️💡, The Gifts & Fruit of the Spirit 🍇🎁, and a life of Moderation ⚖️🕊️; believing in Divine Healing ❤️‍🩹🙏, The Second Coming of Christ 🌎⏳👑, Church Relationship 🤝⛪, and Church Government 👏📜; preparing for The Final Judgment ⚖️🔥 and the promise of Heaven 🏡✨👼; fulfilling the mission of Evangelism 🌍📢 and honoring God through Tithes & Offerings 💰🙏—all leading us to stand firm in faith and walk in the light of Christ every day! ✝️💡🔥#FaithFoundation 🙏 #GodsTruth 📖 #HolySpirit 🕊️ #JesusSaves ✝️ #ChristianLife 🌱 #TCMCI ⛪ #JesusIsLord 👑 #KingdomLife 🌍🔥</p>
                          <p>📢✨ <strong>Up Coming Next Mission:</strong> Evangelism 🌍🔥✝️</p>
                           <p>The Armor of God (Ephesians 6:10-18) reminds us to stand firm against the enemy by putting on the Belt of Truth 🏹📜💫, the Breastplate of Righteousness ❤️‍🔥🛡️💎, the Shoes of the Gospel of Peace 👣🕊️💖, the Shield of Faith 🛡️🔥⚡, the Helmet of Salvation ⛑️✝️🛡️, and the Sword of the Spirit ⚔️📖🔪, while always praying in the Spirit 🙏🔥💭💪, for in Christ, we have victory over every battle! #FaithOverFear #ArmorOfGod #SpiritualBattle #VictoryInChrist ✝️🛡️🔥</p>
                          <p>🙏🎶 <strong>Worship with Us:</strong> Experience God's Presence ⛪✨</p>
                            <p>📖⏳ <strong>TUESDAY:</strong> BIBLE STUDY 🕊️ | TIME: 5:30 PM - 9:00 PM</p>
                            <p>🔥🙌 <strong>FRIDAY:</strong> MIRACLES, REVIVALS & PRAYERS ✝️ | TIME: 5:30 PM - 9:00 PM</p>
                            <p>⛪🎤 <strong>SUNDAY SERVICE:</strong> TEMA Comm.9 Branch 📍 | TIME: 7:30 AM - 12:00 PM</p>
                            <p>⛪🎤 <strong>SUNDAY SERVICE:</strong> ACCRA Dodowa Branch 📍 | TIME: 8:30 AM - 12:30 PM</p>
                            <p>📞🤝 <strong>Contact Us:</strong> We're here for you! ☎️</p>
                            <p>📱📲 <strong>Call Us:</strong> 055-492-8021 📞</p>
                            <p>📱📲 <strong>Call Us:</strong> 054-639-8300 📞</p>
                            <p>🌍📢 <strong>Join Our Next Mission Outreach:</strong> Evangelism ✝️🔥</p>
                           <p></p>
                           
                       </marquee>
                </div>
            </div>
         );
    }
}
 
export default NavbarMain;