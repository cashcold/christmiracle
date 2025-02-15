loot at this code also in same project folder
"import React, { Component } from 'react';
import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
import{ScrollTrigger} from 'gsap/ScrollTrigger'
import 'animate.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import Carousel from 'react-bootstrap-carousel' 
import './style.css'
import SlibebarMain from '../Slibebar/slibebar';
import Dressing from '../Slibebar/dressing';
import WelcomePopup from './WelcomePopup';
import RequestPopup from './RequestPopup';
class HomeMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showWelcomePopup: false,
            showRequestPopup: false,
            showWe: '',
            checkup: '',
         }
    }
    componentDidMount(){

        toast.configure();
   
    }

    // playSound = () => {
    //     const audio = new Audio('/tones/incoming_msg.mp3'); // Adjust the path to your sound file
    //     audio.play();
    // };

   
    render() { 
        const { showWelcomePopup, showRequestPopup } = this.state;

        return ( 
            <div className='mainHome'>
              
                <section className='socialStream'>
                <img className="d-block w-100" src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/Others%2Fthechrist.jpg?alt=media&token=8fef5ae3-37b8-493a-996f-c1e4e01b1ed1'/>
                <p> 🌟👥✨📣🎶🙏📺🌟👥✨Dear beloved,
                    Exciting news! We're thrilled to announce that we're now offering live streaming of our church services, bringing the warmth and inspiration of our community right into your home.In these challenging times, we understand the importance of staying connected and supporting one another. Whether you're unable to attend in person, traveling, or simply prefer the comfort of worshiping from home, our live streaming service ensures that you can still be part of our spiritual family.</p>
                                <p>What to Expect:
                🎶 Experience our uplifting worship sessions live, no matter where you are.
                👥 Engage with our vibrant community through real-time comments and interaction.
                🙏 Access inspiring sermons, heartfelt prayers, and uplifting music from the comfort of your own space.

                📅 Weekly Schedule:

                📖 Tuesday: Bible Study

                ⏰ Time: 5:30 PM to 9:00 PM
                🙌 Friday: Miracles Revival Prayers

                ⏰ Time: 5:30 PM to 9:00 PM
                🎉 Sunday Service:

                ⏰ Time: 7:30 AM to 12:00 PM
                Join us for these transformative gatherings and let's journey together in faith!</p>
                                <p>How to Join:
                👉 Simply visit our website www.tcmci.org , click on the live streaming link, and immerse yourself in the enriching experience of our services.

                📢 Spread the word and invite your friends and family to join us virtually. Let's continue to 🌱🙏 grow together in faith, hope, and love. 🌟💖

                We look forward to seeing you online! 🌐</p>
                </section> 
                {/* <section className='streamingLinks'>
                <div class="schedule">
                    <div class="event">
                        <div class="event-title">Tuesday: Bible Study</div>
                        <div class="event-time">Time: 5:30 PM to 9:00 PM</div>
                        <button class="stream-button">Stream Now</button>
                    </div>
                    <div class="event">
                        <div class="event-title">Friday: Miracles Revival Prayers</div>
                        <div class="event-time">Time: 5:30 PM to 9:00 PM</div>
                        <button class="stream-button">Stream Now</button>
                    </div>
                    <div class="event">
                        <div class="event-title">Sunday Service</div>
                        <div class="event-time">Time: 7:30 AM to 12:00 PM</div>
                        <button class="stream-button">Stream Now</button>
                    </div>
                </div>
                </section> */}
               
            </div>
         );
    }
}
 
export default HomeMain;"