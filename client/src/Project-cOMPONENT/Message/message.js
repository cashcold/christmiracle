import React, { Component } from 'react';
import './style.css'
class MessageMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div classNam='mainMessage'>
                <section className='messageNow'>
                    <div className='newMessage'>
                        <h1>Message coming soon.................</h1>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default MessageMain;