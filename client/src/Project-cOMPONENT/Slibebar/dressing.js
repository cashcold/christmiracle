import React, { Component } from 'react';
import './style.css'
import Carousel from 'react-bootstrap/Carousel' 

class Dressing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className='carl'>
                <h1> CHRISTIAN DRESSING</h1>
                    <Carousel fade>
                        <Carousel.Item>
                            <img className="d-block w-100" src={require('../../pic/New folder/IMG_20210530_143234425.jpg')} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={require('../../pic/New folder/IMG_20210530_143248310.jpg')} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={require('../../pic/New folder/IMG_20201227_140321224_HDR.jpg')} />
                        </Carousel.Item>
                      
                    </Carousel>
            </section>
         );
    }
}
 
export default Dressing;