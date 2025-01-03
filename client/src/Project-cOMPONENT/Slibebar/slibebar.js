import React, { Component } from 'react';
import './style.css'
import Carousel from 'react-bootstrap/Carousel' 

class SlibebarMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className='carl'>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../../pic/How-Should-We-Welcome-the-Jesus-Christ-When-He-Knocks-on-the-Door.jpg')} />
                        <Carousel.Caption>
                        <h3>Behold, I stand at the door, and knock</h3>
                        <p>if any man hear my voice, and open the door</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                  
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/images%2FTHE%20CHRIST%20MIRACLES%20CHURCH%20INT%E2%80%99L.jpg?alt=media&token=8f18506a-e89a-441e-81f9-aa94fc0a8fab" />
                    </Carousel.Item>
                    
                  
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/images%2Fpromote_song_www.tcmci.org.jpg?alt=media&token=1830c185-d173-4e59-aaa8-7620af44b4a5" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/images%2Fbooks_www.tcmci.org.png?alt=media&token=f173bebd-17a5-4a41-8dd2-67eed2afd81f" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../../pic/IMG-20200120-WA0006.jpg')} />
                    </Carousel.Item>
                     <Carousel.Item>
                        <img className="d-block w-100" src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/EVANGELISM%20AND%20MISSION%20AT%20VOLTA%20REGION%20%20AKATSI%20ANYIHEME%20GHANA%2FIMG_20210801_092421.jpg?alt=media&token=9183ca74-8c38-4e3d-a4f6-43430bcfc0d2'/>
                    </Carousel.Item>
                     <Carousel.Item>
                        <img className="d-block w-100" src='https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/Others%2Fthechrist.jpg?alt=media&token=8fef5ae3-37b8-493a-996f-c1e4e01b1ed1'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../../pic/Restored/IMG_4870.jpg')} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../../pic/the-word-of-god-1-638.jpg')} />
                        <Carousel.Caption>
                        <h3>WE BELIVE ONLY THE WORD OF GOD</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                   <Carousel.Item>
                        <img className="d-block w-100" src={require('../../pic/Restored/IMG_4665.jpg')} />
                    </Carousel.Item>
                </Carousel>
            </section>
         );
    }
}
 
export default SlibebarMain;