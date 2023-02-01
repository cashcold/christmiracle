import React, { Component } from 'react';
import moment from 'moment'
import { Helmet } from 'react-helmet';
import {message_api} from '../API/messageApi'
import './style.css'
class MessageMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message_api: message_api
         }
    }
    componentDidMount(){
        console.log(this.state.message_api)
    }
    render() { 
        console.log(this.state.message_api)
        return ( 
            <div classNam='mainMessage'>
                 <Helmet>
                    <base />
                    <title>Christains Books At The Christ Miracle Church International</title>
                    <meta name="description" content="RDownload & Read Free Christian Books That Will Help You Grow Closer to God. The Economy of God. The All-Inclusive Christ. Christian Life Basics. The Knowledge of Life. The Glorious Church. Types: New Testament Bible, Downloadable eBooks, Christian Blog Posts." />
                    <link rel="canonical" href="somelink" />
                </Helmet>
                <section className='motivation_text'>
                    <h3>Download & Read Free Christian Books That Will Help You Grow Closer to God. The Economy of God. The All-Inclusive Christ. Christian Life Basics. The Knowledge of Life. The Glorious Church. Types: New Testament Bible, Downloadable eBooks, Christian Blog Posts.</h3>
                </section>
                <section className='messageNow'>
                    <div className='newMessage newMessage_box_1'>
                        <h2>A Guide to Spiritual Enlightenment by <br/> Prophet Jerry  Sanyni</h2>
                        <div className='display_message'>
                            {this.state.message_api.map(data => (
                                <div className='message_flow_home'>
                                    <h4>{data.title}</h4>
                                    <img className='social_img' src={data.social_on_image}/>
                                    <div className='icon_star'>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className='viewed_tag'>
                                        <span>Viewed {data.eye_seen}</span>
                                    </div>
                                    <p>By {data.name}</p>
                                    <span><i class="fa fa-clock-o " aria-hidden="true"></i> <span>{moment(data.date).format('LLLL')}</span></span>
                                    <h4 className='desc_text'>{data.description}</h4>
                                    <button onClick={()=>{
                                        window.location = `/read_books/${data.head_Text_url}`
                                    }} className='btn btn-warning btn_readMore' >Read More &#8594;</button>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                    <div className='newMessage newMessage_box_2'>
                        
                        <h4>Find out more mIssion and Evanglisim</h4>
                        <hr className='underline_line'/>
                    </div>
                </section>
                
            </div>
         );
    }
}
 
export default MessageMain;