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
                            <img className="d-block w-100" src={require('../../pic/New folder (4)/IMG_20210808_143343370.jpg')} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={require('../../pic/New folder (4)/IMG_20210808_143233624.jpg')} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={require('../../pic/New folder (4)/IMG_20210808_143427937.jpg')} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={require('../../pic/New folder (4)/IMG_20210808_143609807.jpg')} />
                            <Carousel.Caption>
                                <h3>FOR COUPLE</h3>
                            </Carousel.Caption>
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