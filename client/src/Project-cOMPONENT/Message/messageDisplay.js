import React, { Component } from 'react';
import './messageDisplay.css'
class MessageDisplayMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message_api: ''
         }
    }
    componentDidMount(){
       
    }
    render() { 
        return ( 
            <div classNam='MessageDisplayMain'>
                <section className='back_rootMatch'>
                <h5 onClick={()=>{
                    window.location = '/books'
                }} className='back_rootMatch_h5'>  <i class="fa-solid fa-angles-left fa 3x"></i> Back to Books Library</h5>
                </section>
              <section className='messageDisplayNow'>
                    <div className='newMessage newMessageDisplay_box_1'>
                        <h1>Display Message </h1>
                    </div>
                    <div className='newMessage newMessageDisplay_box_2'>
                        
                        <h4>Other Books Of Prophet Jerry Sanyni</h4>
                        <hr className='underline_line'/>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default MessageDisplayMain;