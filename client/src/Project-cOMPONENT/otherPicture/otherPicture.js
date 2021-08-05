import React, { Component } from 'react';
import './style.css'
class Pictures extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='mainPictures'>
                 <section className='pictureNow'>
                    <div className='picture'>
                        <img  src={require('../../pic/Restored/IMG_20201227_135102293.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder/IMG_20201224_222205908.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder/IMG_20201220_154403888.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder/IMG_20201226_100539_742.jpg')} alt='pic'/>
                        <img  src={require('../../pic/New folder/IMG_20201219_110409671_TOP.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_085248569.jpg')} alt='pic'/>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Pictures;