import React, { Component } from 'react';
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
import BibleVerse from '../BibleVerse/BibleVerse';
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

    navigateToStream = (eventTitle, eventTime, messageTitle) => {
        this.props.history.push(
            `/stream/${eventTitle.replace(/ /g, '-')}/?time=${encodeURIComponent(eventTime)}&message=${encodeURIComponent(messageTitle)}`
        );
    };
    componentDidMount(){

        toast.configure();
   
         setTimeout(() => {
            this.setState({ showWelcomePopup: true });
        }, 8000);

        setTimeout(() => {
            this.setState({ showRequestPopup: true }, () => {
                // this.playSound();
            });
        }, 9000);
        
        setTimeout(()=>{
            toast.success('Peace Be Unto You All')   
           
        },4000)
        setTimeout(()=>{
            toast.success('Master Jesus Welcomes You')
           
        },8000)
        setTimeout(()=>{
            toast.success('TUEDAY: BIBLE STUDY, TIME 5:30 PM TO 9:00 PM')
        },14000)
        setTimeout(()=>{
            toast.success('FRIDAY: MIRACLES REVIVAL PRAYERS , TIME 5:30 PM TO 9:00 PM')
        },20000)
        setTimeout(()=>{
            toast.success('SUNDAY SERVICE: TEMA Comm.9 Branch , TIME 7:30 am TO 12:00 PM')
        },30000)
        setTimeout(()=>{
            toast.success('SUNDAY SERVICE: ACCRA Dodowa Branch , TIME 8:30 am TO 12:30 PM')
        },40000)
        setTimeout(() => {
            toast.success(
                <img 
                    src="https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/images%2Ftcmci.org.jpg?alt=media&token=b3abc747-33d6-4d7e-a6c7-bff8e667a407" 
                    alt="Notification Image" 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                />,
                { 
                    autoClose: 60000, // Keeps the toast on screen for 1 minute
                    closeOnClick: true, // Optionally allow closing by clicking
                }
            );
        }, 7000);
       

        const NotSure = ()=>{
            const wayImg2 = document.querySelector('.wayImg2')
            wayImg2.addEventListener('click',()=>{
                window.location='/contact'
            })
        }
        NotSure()
        
      
        const Typing = ()=>{
            const typedTextSpan = document.querySelector(".typed-text");
            const cursorSpan = document.querySelector(".cursor");
    
            const textArray = [" JESUS IS GOD...", "JESUS IS THE SON OF GOD...", "JESUS BECAME HUMAN THROUGH THE VIRGIN BIRTH...","JESUS CHRIST IS THE SAVIOR OF THE WORLD..."," JESUS PERFORMS MIRACLES...","JESUS CHANGES LIVES...","JESUS LIVES IN HEAVEN AT FATHER GOD’S RIGHT HAND...","JESUS WILL RETURN TO JUDGE ALL HUMANITY...","JESUS CHRIST WILL RECEIVE YOU IF YOU COME TO HIM..."];
            const typingDelay = 200;
            const erasingDelay = 100;
            const newTextDelay = 2000; // Delay between current and next text
            let textArrayIndex = 0;
            let charIndex = 0;
    
            function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } 
            else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
            }
    
            function erase() {
            if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
            } 
            else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
            setTimeout(type, typingDelay + 1100);
            }
            }
    
            document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
            if(textArray.length) setTimeout(type, newTextDelay + 250);
            });
        }
       Typing()
    }

    // playSound = () => {
    //     const audio = new Audio('/tones/incoming_msg.mp3'); // Adjust the path to your sound file
    //     audio.play();
    // };

   
    render() { 
        const { showWelcomePopup, showRequestPopup } = this.state;

        const events = [
            { title: "Tuesday: Bible Study", time: "5:30 PM to 9:00 PM" , messageTitle: "Free from power of sin" },
            { title: "Friday: Miracles Revival Prayers", time: "5:30 PM to 9:00 PM" , messageTitle: "pray as a child of God"  },
            { title: "Sunday Service", time: "7:30 AM to 12:00 PM" , messageTitle: "The word of God is power and activite"  },
            { title: "Church Program", time: "On The Month Of March" , messageTitle: "Church Anniversary"  }
        ];

        return ( 
            <div className='mainHome'>
                <h1 className='welcomeTitle'>MISSION AND EVANLISM</h1>
                <SlibebarMain/>
                <section  className='box-slide '>
               
                        
                </section>
                <section className='slibeMe'>
                   
                </section>
                {/* BibleVerse */}
                <div>
                    <BibleVerse />
                    </div>
                
                <section className='bible_widget_main_1'>
                    <h1>Enjoy Free Bible <span>Reading Scriptures</span></h1>
                    <div data-gb-widget="search" />
                    <div data-gb-widget="passage" data-passage="JAS.4.5" />
                    <a data-gb-link="JHN.1.11">reference</a>
                </section>
                <section className='promot_song'>
                    <div className='finalMsg'>
                        <div className='lastMsg'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/images%2Fpromote_song_www.tcmci.org.jpg?alt=media&token=1830c185-d173-4e59-aaa8-7620af44b4a5'/>
                        </div>
                    </div>
                </section>
              
                <section className='aboutJesus'>
                        <div className='letTalk'>
                            <div className='h1Title'>
                                <h1>WHO IS JESUS?</h1>
                                <div className='subHead'>
                                    <h1> <span class="typed-text"></span><span class="cursor">&nbsp;</span></h1>
                                </div>
                            </div>
                            <div className='welcomevIDEO'>
                                <video autoPlay  loop controls src={require('../../pic/Hosanna.mp4')}/> 
                            </div>
                        </div>
                </section>
                <section className='moreJesus'>
                <div className='aboutJesus'>
                        <div className='masterJesus'>
                            <div className='master'> 
                                <h1>JESUS</h1>
                                <p>The world knows that 2,000 years ago a man named Jesus came from the town of Nazareth in what is now called Israel. He traveled about the region and gained a large following. After a few years, the religious leaders in Jerusalem falsely accused him of crimes and handed him over to the Roman authorities. They executed him by nailing him to a cross. A short time later, his followers preached in the name of Jesus Christ, whom they said rose from the dead. More and more followers were added to this movement which has become the Christian church of today.</p>
                                <p>These are the facts upon which even the greatest skeptic will agree. But there is so much more to Jesus than that. Where he came from, what he did on earth, what he can do for us now is all revealed in the Bible. This book contains the only record of Jesus and was written by the generation of people who heard him teach and saw his deeds. Here is what the Bible teaches us about Jesus Christ:</p>
                            </div>
                            <div className='aboutJesus'>
                               <div className='praiseJesus'>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/Lord-Jesus-1.jpg')}/>
                                        <h4>1. JESUS IS GOD</h4>
                                        <p>John wrote about Him: In the beginning was the Word [poetic description of Jesus], and the Word was with God and the Word was God (John 1:1 ESV). He created the world and all that is in it (John 1:3). The religious leaders of his time understood that Jesus claimed to be God (John 5:17-18). Paul wrote that when Jesus died, the Father revealed to the entire world that He was God (Philippians 2:5-11).</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/how-will-the-Lord-Jesus-return.jpg')}/>
                                        <h4>2. JESUS IS THE SON OF GOD</h4>
                                        <p>According to the Bible, “Son of God” means: (1) He is fully God. (2) He is one of three persons who together make up the One God. This concept is called the “Trinity.”<br/>The religious leaders of Jesus’ time understood this concept: This was why the Jews were seeking all the more to kill him, because not only was he breaking the Sabbath, but he was even calling God his own Father, making himself equal with God. (John 5:18 ESV)</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/Jesus-teaches-peter-to-forgive-others-seventy-times-seven.jpg')}/>
                                        <h4>3. JESUS BECAME HUMAN THROUGH THE VIRGIN BIRTH.</h4>
                                        <p>The eternal Son of God already existed in heaven (John 17:5). Through the power of the Holy Spirit (Matthew 1:20), He was born as a human being, who was then named Jesus (Matthew 1:25). To demonstrate that Jesus was not a mere man (Colossians 2:9), God chose a virgin to give birth to Him (Luke 1:34-35).</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/The-Parable-of-the-Lost-Sheep.jpg')}/>
                                        <h4>4. JESUS CHRIST IS THE SAVIOR OF THE WORLD.</h4>
                                        <p>Anytime we disobey God is called sin. The penalty for sin is death, but God in his love wants us to live. Therefore, he sent the promised Messiah (also called Christ) to save the world (John 1:41). The Son of God, Jesus Christ, came to earth to die in our place. Because He lived a life without sin, only He was qualified to pay for our sins by His death on a cross. He then demonstrated His power over death when He rose from the grave three days later. Only through Jesus can our sins can be forgiven and we can come to God (Acts 4:12). Jesus Christ is the Savior of everyone in the world (John 3:16).</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/maxresdefault (1).jpg')}/>
                                        <h4>5. JESUS PERFORMS MIRACLES.</h4>
                                        <p>All through his time on earth, Jesus performed miracles. He healed the sick (Matthew 8:16 among many other instances), controlled the weather (Mark 4:39), multiplied food (Matthew 14:14-21), and provided money when needed (Matthew 17:24-27). Even after leaving the earth, He still does miracles in people’s lives (Acts 3:12-16).</p>
                                    </div>
                                    
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/guérison-lépreux-678x381.jpg')}/>
                                        <h4>6. JESUS CHANGES LIVES.</h4>
                                        <p>People who followed Jesus turned away from their sins. He cast seven demons out of Mary Magdalene (Luke 8:2) and she became a devoted follower who told others that Jesus had risen from the dead (John 20:16). Zaccheus, a tax collector, repaid people whom he cheated when collecting taxes and gave half of everything else to the poor (Luke 19:1-10). When followers were filled with the power of the Holy Spirit, they were able to declare the message of Jesus, perform miracles, and live free from sin (Luke 10:1-20).<br/>For nearly 2,000 years, Jesus Christ has been changing the lives of people all over the world. Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come (2 Corinthians 5:17 ESV). He can change your life as well. Jesus will deliver you from sin’s addiction (Romans 6:22), renew your mind (Romans 12:2), and heal your hurts (2 Thessalonians 2:16-17).</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/8DF5DF25-0526-4C28-9CCC-ABF92B4A368D.jpeg')}/>
                                        <h4>7. JESUS LIVES IN HEAVEN AT FATHER GOD’S RIGHT HAND.</h4>
                                        <p>After Jesus rose from the dead, He ascended to heaven to the place where he was before becoming human. From there he is able to hear our prayers (Romans 8:34).</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/unnamed.jpg')}/>
                                        <h4>8. JESUS WILL RETURN TO JUDGE ALL HUMANITY.</h4>
                                        <p>While he was still on this earth, Jesus said, Then will appear in heaven the sign of the Son of Man [a title Jesus used for Himself], and then all the tribes of the earth will mourn, and they will see the Son of Man coming on the clouds of heaven with power and great glory (Matthew 24:30 ESV). When Jesus returns, He will separate those who will live with Him forever in heaven from those who will be punished (Matthew 25:31-33).</p>
                                    </div>
                                    <div className='aboutMaster'>
                                        <img src={require('../../pic/jesus-and-the-lost-sheep.jpg')}/>
                                        <h4>9. JESUS CHRIST WILL RECEIVE YOU IF YOU COME TO HIM.</h4>
                                        <p>Jesus said, Whoever comes to me I will never cast out (John 6:37 ESV). This was why He came to earth—to seek and to save the lost (Luke 19:10 ESV). It does not matter what you have done, Jesus still wants you to come to Him. He said, I have not come to call the righteous but sinners to repentance (Luke 5:32 ESV).</p>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='promot_books'>
                    <div className='finalMsg'>
                        <div className='lastMsg'>
                        <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/images%2Fbooks_www.tcmci.org.png?alt=media&token=f173bebd-17a5-4a41-8dd2-67eed2afd81f" />
                        </div>
                    </div>
                </section>
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
                <section className='streamingLinks'>
                    <div className="schedule">
                        {events.map((event, index) => (
                            <div key={index} className="event">
                                <div className="event-title">{event.title}</div>
                                <div className="event-time">{event.time}</div>
                                {/* <div className="event-message">📖 {event.messageTitle}</div> */}
                                <button 
                                    className="stream-button" 
                                    onClick={() => this.navigateToStream(event.title, event.time, event.messageTitle)}
                                >
                                    Stream Now
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='connectJesus'>
                <section className='billboard'>
                    <a href='https://firebasestorage.googleapis.com/v0/b/nextplatform77-79102.appspot.com/o/nextplatform_img_2%2FTheChristMiracleChruch.png?alt=media&token=636c46b3-5e67-455c-a94b-531b5fa9ced9'> <img src='https://firebasestorage.googleapis.com/v0/b/nextplatform77-79102.appspot.com/o/nextplatform_img_2%2FTheChristMiracleChruch.png?alt=media&token=636c46b3-5e67-455c-a94b-531b5fa9ced9'/></a>
                   
                </section> 
                
                <div className='otherInfo'>
                        <div className='infoReady'>
                            <div className='readyInfo'>
                                <h1>Ready to connect your passion with God’s heart?</h1>
                            </div>
                            <hr/>
                            <div className='otherInfoText'>
                                <p>If you desire to step out in faith and go above and beyond, to be a part of something more than yourself, and to allow God to use you in mighty ways, then we want to help you take the next steps on your journey. It’s time to connect your passion with God’s plan for redemption. This is God’s best for us. We can equip and support you, helping you find the intersection of your passion and God’s heart...</p>
                            </div>
                            <div className='infoWay'>
                                <div className='wayInfo'>
                                    <div className='wayImg wayImg1 forward'>
                                        <img src={require('../../pic/0_Uy3xyzERde8KOp9Q.jpg')}/>
                                        <h3>Your journey continues here!</h3>
                                    </div>
                                    <div className='wayImg wayImg2'>
                                        <img src={require('../../pic/guidance.jpg')}/>
                                        <h3>Not sure? Let us guide you.<div className='fastImg blink_me'><img src={require('../../pic/fast-forward.svg')}/></div></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='christian_dressing'>
                    <Dressing/>
                </section>
                <section className='where_jesus_walk'>
                    <h1>Where Jesus Walked | Full Movie</h1>
                   <div className='webView iframe-container'>
                   <iframe width="640" height="480" src="https://www.youtube.com/embed/efZXSQ2L6Ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   </div>
                </section>
                
                <section className='fame_money'>
                <div className='welcomevIDEO'>
                <video   loop controls src='https://firebasestorage.googleapis.com/v0/b/nextplatformcashcold.appspot.com/o/img_2%2F394022030_614897813944882_9014597489614668116_n.mp4?alt=media&token=9ee68ead-b9a0-40ad-8e17-895bed7f4eb3'/> 
                            </div>
                    
                    
                </section>
                <section className='lastBeat'>
                     <div className='finalMsg'>
                        <div className='lastMsg'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/images%2FTHE%20CHRIST%20MIRACLES%20CHURCH%20INT%E2%80%99L.jpg?alt=media&token=8f18506a-e89a-441e-81f9-aa94fc0a8fab'/>
                        </div>
                    </div>
                     <div className='finalMsg'>
                        <div className='lastMsg'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/Others%2Fdbe34fb31a6e4877980683c1d18853ef.jpg?alt=media&token=06b3921d-5e19-4631-904c-352db4b5ece8'/>
                        </div>
                    </div>
                     <div className='finalMsg'>
                        <div className='lastMsg'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/Others%2FTheChrist2024.jpg?alt=media&token=6257e4dd-6637-4784-b5d4-3e75b4a90228'/>
                        </div>
                    </div>
                     <div className='finalMsg'>
                        <div className='lastMsg'>
                        <img className="d-block w-100" src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/Others%2Fthemiraclesprayers.jpg?alt=media&token=af347c7e-6069-4606-beb3-1d746b310cfb'/>
                            
                        </div>
                    </div>
                     <div className='finalMsg'>
                        <div className='lastMsg'>
                            <img src={require('../../pic/IMG-20200120-WA0006.jpg')}/>
                        </div>
                    </div>
                     <div className='finalMsg'>
                        <div className='lastMsg'>
                            <img src={require('../../pic/New folder (4)/IMG_20210810_190908.jpg')}/>
                        </div>
                    </div>
                    <div className='finalMsg'>
                        <div className='lastMsg'>
                            <img src={require('../../pic/IMG-20200120-WA0007.jpg')}/>
                        </div>
                    </div>
                    <div className='finalMsg'>
                        <div className='lastMsg'>
                            <img src={require('../../pic/New folder/IMG-20190302-WA0001.jpg')}/>
                        </div>
                    </div>
                </section>
                  {showWelcomePopup && <WelcomePopup onClose={() => this.setState({ showWelcomePopup: false })} />}
                  {showRequestPopup && <RequestPopup onClose={() => this.setState({ showRequestPopup: false })} />}
            </div>
         );
    }
}
 
export default HomeMain;