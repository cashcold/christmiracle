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
                        <h1>Message now coming soon.................</h1>
                    </div>
                    <div className='newMessage newMessage_box_2'>
                        <h3>Other Books Of Prophet Jerry Sanyi</h3>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default MessageMain;