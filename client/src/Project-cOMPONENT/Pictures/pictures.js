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
                    <h1 className='outReach1'>EVANGELISM AND MISSION AT VOLTA REGION AGBOZUME GHANA</h1>
                    <div className='picture'>
                        <img  src={require('../../pic/Restored/IMG_20210328_115911141.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_115927765.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_115933123.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_115940035.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_123949127.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_085248569.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_123555134.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_123853217.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_133515586.jpg')} alt='pic'/>
                        <img  src={require('../../pic/Restored/IMG_20210328_115943265.jpg')} alt='pic'/>
                    </div>
                </section>
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