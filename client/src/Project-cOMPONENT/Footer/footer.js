import React from 'react'
import './style.css'

class FooterMain extends React.Component{
    render(){
        return(
            <div className='footer'>
                <section className='section__A'>
                    <div className='subsc'>
                        <h2><span className='styleText'>SUBSCRIBE & FOLLOW</span> TO GET UPDATE FROM <span className='styleName'>THE CHRIST MIRACLE CHURCH INT</span></h2>
                    </div>
                    <div className='link-input'>
                            <button className='btn btn-success '><input placeholder='Email'/></button>
                            <a href='/subscribe'><button className='btn btn-warning btnEmail'>SUBSCRIBE NOW</button></a>
                        </div>
                </section>
                <section className='advShop__main'>
                    <div className='advShopNow'>
                        <div className='textMe'>
                            <p>
                                <ul>
                                    <li>The internal god head The father the son the holy spirit.</li>
                                    <li>the fall of man.</li>
                                    <li>the plan of redemption.</li>
                                    <li>salvation through grace.</li>
                                    <li>repentance and acceptance.</li>
                                    <li>the new birth.</li>
                                    <li>Daily christian life.</li>
                                    <li>Baptism of water and the lord's supper.</li>
                                    <li>the baptism of the holy spirit.</li>
                                 
                                </ul>
                            </p>
                            </div>
                            <div className='textMe'>
                            {/* <h1>THIS WE BELIVE</h1> */}
                                <ul>
                                <li><p>the spirit - filled life.</p></li>
                                        <li>the gifts and the fruit of the spirit.</li>
                                        <li>Moderation.</li>
                                        <li>Divine healing.</li>
                                        <li>The second coming of christ.</li>
                                        <li>Church relationship.</li>
                                        <li>Church Government.</li>
                                        <li>the final judgement.</li>
                                        <li>heaven.</li>
                                        <li>Eveanglism.</li>
                                        <li>Tithes and offering.</li>
                                </ul>
                            </div>
                            <div className='product-A'>
                                <h1>Quick Links</h1>
                            <ul className='footerLinks'>
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
                        </div>
                    </div>
                </section>
                {/* <section className='fixed__rate'>
                    <div className='fixedRate'>
                       
                           
                    </div>
                </section>  */}
                <section className='lastFooter'>
                    <div className='footerMsg'>
                    <p>&copy; COPYRIGHT  || DEVELOP BY THE CHRIST MIRACLE CHURCH INT TEAM || PRIVACY POLICY || TERMS OF USE || AD CHOICES || COOKIE POLICY || COOKIE SETTINGS</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default FooterMain;