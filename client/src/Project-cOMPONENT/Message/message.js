import React, { Component } from 'react';
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
                <section className='messageNow'>
                    <div className='newMessage newMessage_box_1'>
                        <div className='display_message'>
                            {this.state.message_api.map(data => (
                                <div className='message_flow_home'>
                                    <h4>{data.title}</h4>
                                    <img className='social_img' src={data.social_on_image}/>
                                    <p>By {data.name}</p>
                                    <h4 className='desc_text'>{data.description}</h4>
                                    <a href='#' className='btn btn-warning'>Read More &#8594;</a>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                    <div className='newMessage newMessage_box_2'>
                        
                        <h4>Message now coming soon.................</h4>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default MessageMain;