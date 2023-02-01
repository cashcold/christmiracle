import React, { Component } from 'react';
import './style.css'
class MessageMain extends Component {
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
              <h1>Display Message </h1>
            </div>
         );
    }
}
 
export default MessageMain;