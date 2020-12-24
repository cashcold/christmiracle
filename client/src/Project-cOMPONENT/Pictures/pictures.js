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
                    <h1 className='outReach1'>EVANGELISM AND MISSION AT VOLTA REGION MAMEDO GHANA</h1>
                    <div className='picture'>
                        <img  src={require('../../pic/IMG_20200926_091117.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_091201.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_124853.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_124850.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_092306.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_092147.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_083105.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_091010.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_092327.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_092336.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_091016.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_124849.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200926_083111.jpg')} alt='pic'/>
                        <img src={require('../../pic/IMG_20200927_151946.jpg')} alt='pic'/>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Pictures;