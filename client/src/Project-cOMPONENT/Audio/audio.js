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
                <section className='audioNow_layOut_1'>
                <iframe  src="https://open.spotify.com/embed/album/3dY5SHT5Tx1oXIIUE9zoGH?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </section>
                <section className='audioNow_layOut_1'>
                    <iframe  src="https://open.spotify.com/embed/playlist/2tkwlVDrj0EymokWhtR3lw?utm_source=generator" width="100%" height="700" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </section>
                <section className='audioNow_layOut_1'>
                    <iframe  src="https://open.spotify.com/embed/playlist/2rdcocOpQzLq0VI0lmGOAb?utm_source=generator" width="100%" height="700" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </section>
                <section className='audioNow_layOut_1'>
                    <iframe  src="https://open.spotify.com/embed/playlist/7cjwCLfip6gVrf5fSgdWOE?utm_source=generator" width="100%" height="700" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </section>
            </div>
         );
    }
}
 
export default AudioMain;