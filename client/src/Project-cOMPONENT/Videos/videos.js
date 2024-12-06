import React, { Component } from 'react';
import './style.css'
class VideosMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='mainVideos'>
                 <section className='video_Now'>  
                    <div className='video_page_1  iframe-container'>
                        <h2>Purging The Church</h2>
                        <iframe width="1054" height="593" src="https://www.youtube.com/embed/VqRlsEj9i8Y" title="Purging The Church" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='video_page_1  iframe-container'>
                        <h2>Bear Fruit</h2>
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/QaQa42Eh2eM" title="bear fruit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                   
                    <div className='video_page_1  iframe-container'>
                        <h2>Unlimited Harvest</h2>
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/VIRHemLVfZY" title="unlimited harvest" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='video_page_1  iframe-container'>
                        <h2>Who is God.</h2>
                        <iframe src="https://www.youtube.com/embed/eAvYmE2YYIU?vq=hd1080&autoplay=1&rel=0" width="560" height="315" frameborder="0"></iframe>
                    </div>
                    <div className='video_page_1  iframe-container'>
                        <h2>Holiness</h2>
                        <iframe src="https://www.youtube.com/embed/l9vn5UvsHvM?vq=hd1080&rel=0" width="560" height="315" frameborder="0"></iframe>
                    </div>
                    <div className='video_page_1  iframe-container'>
                        <h2>Tree of Life</h2>
                        <iframe src="https://www.youtube.com/embed/TJLan-pJzfQ?vq=hd1080&rel=0" width="560" height="315" frameborder="0"></iframe>
                    </div>
                    <div className='video_page_1  iframe-container'>
                        <h2>Holy Spirit</h2>
                        <iframe src="https://www.youtube.com/embed/oNNZO9i1Gjc?vq=hd1080&rel=0" width="560" height="315" frameborder="0"></iframe>
                    </div>
                    <div className='video_page_1  iframe-container'>
                        <h2>Angels and Cherubim</h2>
                        <iframe src="https://www.youtube.com/embed/-bMRxQbLUlg?vq=hd1080&rel=0" width="560" height="315" frameborder="0"></iframe>
                    </div>
                    <div className='video_page_1  iframe-container'>
                        <h2>Justice</h2>
                        <iframe src="https://www.youtube.com/embed/A14THPoc4-4?vq=hd1080&rel=0" width="560" height="315" frameborder="0"></iframe>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default VideosMain;