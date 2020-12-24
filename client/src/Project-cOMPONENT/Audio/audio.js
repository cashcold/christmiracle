import React, { Component } from 'react';
import './style.css'
class AudioMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div classNam='mainAudio'>
                <section className='audioNow'>
                    <div className='newAudio'>
                        <h1>Audio coming soon.................</h1>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default AudioMain;