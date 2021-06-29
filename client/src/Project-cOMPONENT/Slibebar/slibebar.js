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
                        <img className="d-block w-100" src={require('../../pic/Restored/IMG_20210404_125719443.jpg')} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../../pic/IMG_20200926_124853.jpg')} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../../pic/Restored/IMG_20210328_115919581.jpg')} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../../pic/the-word-of-god-1-638.jpg')} />
                        <Carousel.Caption>
                        <h3>WE BELIVE ONLY THE WORD OF GOD</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../../pic/IMG_20200926_124849.jpg')} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../../pic/Restored/IMG_20210328_085248569.jpg')} />
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../../pic/IMG_20200926_083105.jpg')} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../../pic/Restored/IMG_20210328_115927765.jpg')} />
                    </Carousel.Item>
                </Carousel>
            </section>
         );
    }
}
 
export default SlibebarMain;