import React, { Component } from 'react';
import {Mp3_main_api} from '../../API/mp3_main_api.js' 
import ReactPaginate from 'react-paginate'; 
import {Card,Button} from 'react-bootstrap'

// import './link_box.css'
// import { Helmet } from 'react-helmet';
// LinkBoxMain


import './style.css'
class MusicBox_1 extends Component { 
    constructor(props) {
        super(props);
        this.state = { 
            music_box_1: Mp3_main_api,
            offset: 0,
            perPage: 8,
            currentPage: 0
         }

         this.handlePageClick = this.handlePageClick.bind(this);
    }
    receivedData() {
        const data = this.state.music_box_1
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)  
        const postData = slice.map(pd => <React.Fragment>
           <div className='drop_main_data'>
            <div className='drop_data' onClick={()=>{ 
                    localStorage.setItem('mp3_api_id',pd.id)
                    localStorage.setItem('mp3_api_name',pd.name)
                    localStorage.setItem('mp3_api_title',pd.title)
                    localStorage.setItem('mp3_api_head_Text_url',pd.head_Text_url)
                    localStorage.setItem('mp3_api_img',pd.img)
                    localStorage.setItem('mp3_api_head_Text',pd.head_Text)
                    localStorage.setItem('mp3_api_song_href',pd.song_href)
                    localStorage.setItem('mp3_api_date',pd.date)
                    localStorage.setItem('mp3_api_eye_seen',pd.eye_seen)
                    localStorage.setItem('mp3_api_music_type',pd.music_type)
                    localStorage.setItem('mp3_api_song_href',pd.song_href)
                    localStorage.setItem('mp3_api_about_Main',pd.about_Main)
                    localStorage.setItem('mp3_api_social_on_image',pd.social_on_image)


                    const musicParamsUrl = {
                        name: pd.name,
                        info: pd.head_Text_url,
                        on_image: pd.social_on_image
                    }
                    const queryMusicParams = require('query-string')

                    const passMusicParams = queryMusicParams.stringify(musicParamsUrl)
                    
                    window.location = `/music_box/${pd.id}?${passMusicParams}`
                    }}>
                    <section className='drop_data_info_main'>
                        <div className='data_drop_info_box_1'>
                        <img src={pd.img}/>
                    </div>
                    <div className='data_drop_info_box_2'>
                        <h3>Download: {pd.name} mp3</h3>
                        <p>Title: {pd.title}</p>
                        <button className='btn btn-danger'>Listen or Download</button>
                    </div>
                </section>

                </div>
           </div>
        </React.Fragment>)
        this.setState({
         pageCount: Math.ceil(data.length / this.state.perPage),
        
         postData
     })

     }

     handlePageClick = (e) => {
         const selectedPage = e.selected;
         const offset = selectedPage * this.state.perPage;
 
         this.setState({
             currentPage: selectedPage,
             offset: offset
         }, () => {
             this.receivedData()
         });
 
     };

     handleSubmitSong = (event) => {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        const contactInfo = document.getElementById('contact-info');
        if (contactInfo.style.display === 'none') {
            contactInfo.style.display = 'block';
        } else {
            contactInfo.style.display = 'none';
        }
    };


     componentDidMount(){

        this.receivedData()

        this.submitSongBtn.addEventListener('click', this.handleSubmitSong);

        }

     componentWillUnmount() {
        // Remove event listener to avoid memory leaks
        this.submitSongBtn.removeEventListener('click', this.handleSubmitSong);
    }
    render() { 
        return ( 
            <div className='music_box_1'>
                    <h3>Next-Platform <br/>Music Box On Fire</h3>
                    <section className='promote_song'>
                    <div class="container_stream">
                        <h1>Promote Your Gospel Song for Free!</h1>
                        <p>Are you a gospel singer hoping to make an impact with your music?</p>
                        <p>Our platform offers an incredible opportunity for gospel artists to showcase their talent to a global audience. Whether you're a seasoned performer or just starting your musical journey, we're here to support you every step of the way.</p>
                        <p>When you submit your song with us, you're not just sharing your music; you're spreading a message of love, faith, and inspiration. Your song could be featured prominently on our website, shared across our social media channels, and even included in our newsletter, reaching thousands of passionate gospel music enthusiasts.</p>
                        <p>Don't let this chance slip away. Take the first step towards reaching your audience and fulfilling your calling. Submit your song now and let your voice be heard!</p>
                        <a href="#" ref={(element) => this.submitSongBtn = element} className="cta-button">Submit Your Song</a>
                        <div id="contact-info" style={{ display: 'none' }}>
                            <h4>PHONE NUMBER</h4>
                            <p>0554928021</p>
                            <p>0546398300</p>
                        </div>
                    </div>
                    </section>
                <section className="box_music_1_main">
                    {this.state.postData}
                <section className='check_pagination'>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                </section>
                </section>
            </div>
         );
    }
}
 
export default MusicBox_1;