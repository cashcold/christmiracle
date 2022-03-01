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
                    <div className='video_page_1'>
                        <h2>Who is God</h2>
                        <iframe src="https://www.youtube.com/embed/eAvYmE2YYIU?vq=hd1080&autoplay=1&rel=0" width="560" height="315" frameborder="0"></iframe>
                    </div>
                    <div className='video_page_1'>
                        <h2>Holiness</h2>
                        <iframe src="https://www.youtube.com/embed/l9vn5UvsHvM?vq=hd1080&rel=0" width="560" height="315" frameborder="0"></iframe>
                    </div>
                    <div className='video_page_1'>
                        <h2>Tree of Life</h2>
                        <iframe src="https://www.youtube.com/embed/TJLan-pJzfQ?vq=hd1080&rel=0" width="560" height="315" frameborder="0"></iframe>
                    </div>
                    <div className='video_page_1'>
                        <h2>Holy Spirit</h2>
                        <iframe src="https://www.youtube.com/embed/oNNZO9i1Gjc?vq=hd1080&rel=0" width="560" height="315" frameborder="0"></iframe>
                    </div>
                    <div className='video_page_1'>
                        <h2>Angels and Cherubim</h2>
                        <iframe src="https://www.youtube.com/embed/-bMRxQbLUlg?vq=hd1080&rel=0" width="560" height="315" frameborder="0"></iframe>
                    </div>
                    <div className='video_page_1'>
                        <h2>Justice</h2>
                        <iframe src="https://www.youtube.com/embed/A14THPoc4-4?vq=hd1080&rel=0" width="560" height="315" frameborder="0"></iframe>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default VideosMain;