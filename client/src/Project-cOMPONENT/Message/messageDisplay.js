import React, { Component } from 'react';
import moment from 'moment'
import { Helmet } from 'react-helmet';
import './messageDisplay.css'
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";
  import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
  } from "react-share";
class MessageDisplayMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message_api: '',
            Books_api_id: '',
            Books_api_title: '',
            Books_api_name: '',
            Books_api_name: '',
            Books_api_Chapter_1: '',
            Books_api_Chapter_2: '',
            Books_api_Chapter_3: '',
            Books_api_Chapter_4: '',
            Books_api_Chapter_5: '',
            Books_api_Chapter_6: '',
            Books_api_Chapter_7: '',
            Books_api_Chapter_7: '',
            Books_api_Chapter_Conclusion: '',
            social_on_image: '',
         }
    }
    componentDidMount(){
        const Books_api_id = localStorage.getItem('Books_api_id')
        const Books_api_name = localStorage.getItem('Books_api_name')
        const Books_api_title = localStorage.getItem('Books_api_title')
        const Books_api_Chapter_1 = localStorage.getItem('Books_api_Chapter_1')
        const Books_api_Chapter_2 = localStorage.getItem('Books_api_Chapter_2')
        const Books_api_Chapter_3 = localStorage.getItem('Books_api_Chapter_3')
        const Books_api_Chapter_4 = localStorage.getItem('Books_api_Chapter_4')
        const Books_api_Chapter_5 = localStorage.getItem('Books_api_Chapter_5')
        const Books_api_Chapter_6 = localStorage.getItem('Books_api_Chapter_6')
        const Books_api_Chapter_7 = localStorage.getItem('Books_api_Chapter_7')
        const Books_api_Chapter_Conclusion = localStorage.getItem('Books_api_Chapter_Conclusion')
        const Books_api_date = localStorage.getItem('Books_api_date')
        const social_on_image = localStorage.getItem('social_on_image')


        this.setState({ 
            Books_api_id,
            Books_api_name,
            Books_api_title,
            Books_api_date,
            social_on_image,
            Books_api_Chapter_1,
            Books_api_Chapter_2,
            Books_api_Chapter_3,
            Books_api_Chapter_4,
            Books_api_Chapter_5,
            Books_api_Chapter_6,
            Books_api_Chapter_7,
            Books_api_Chapter_Conclusion
        })
    }
    render() { 

        const titleParts = this.state.title ? this.state.title.split('\n\n') : [];
        
        return ( 
            <div classNam='MessageDisplayMain'>
                   <Helmet>
                    <base />
                    <title>{this.state.Books_api_title}- {this.state.Books_api_name}</title>
                    <meta name="description" content="RDownload & Read Free Christian Books That Will Help You Grow Closer to God. The Economy of God. The All-Inclusive Christ. Christian Life Basics. The Knowledge of Life. The Glorious Church. Types: New Testament Bible, Downloadable eBooks, Christian Blog Posts." />
                    <link rel="canonical" href="somelink" />
                </Helmet>
                <section className='back_rootMatch'>
                <h5 onClick={()=>{
                    window.location = '/books'
                }} className='back_rootMatch_h5'>  <i class="fa-solid fa-angles-left fa 3x"></i> Back to Books Library</h5>
                </section>
              <section className='messageDisplayNow'>
                    <div className=' newMessageDisplay_box_1'>
                    <p>By {this.state.Books_api_name}</p>
                        <h1 className='book_title_h1' dangerouslySetInnerHTML={{ __html: this.state.Books_api_title.replace(/\n/g, '<br />') }}></h1>
                        {/* <h1 className='book_title_h1'>{this.state.Books_api_title}</h1> */}
                        <h1> {titleParts.map((part, index) => (
                            <h5 key={index} className='about_main_h5'>{part}</h5>
                        ))}</h1>
                        <span><i className="fa fa-clock-o " aria-hidden="true"></i> <span>{moment(this.state.Books_api_date).format('LLLL')}</span></span>
                        <img className='social_on_image' src={this.state.social_on_image}/>
                        <h5 className='about_main_h5' dangerouslySetInnerHTML={{ __html: this.state.Books_api_Chapter_1.replace(/\n/g, '<br />') }}></h5>
                        <h5 className='about_main_h5' dangerouslySetInnerHTML={{ __html: this.state.Books_api_Chapter_2.replace(/\n/g, '<br />') }}></h5>
                        <h5 className='about_main_h5' dangerouslySetInnerHTML={{ __html: this.state.Books_api_Chapter_3.replace(/\n/g, '<br />') }}></h5>
                        <h5 className='about_main_h5' dangerouslySetInnerHTML={{ __html: this.state.Books_api_Chapter_4.replace(/\n/g, '<br />') }}></h5>
                        <h5 className='about_main_h5' dangerouslySetInnerHTML={{ __html: this.state.Books_api_Chapter_5.replace(/\n/g, '<br />') }}></h5>
                        <h5 className='about_main_h5' dangerouslySetInnerHTML={{ __html: this.state.Books_api_Chapter_6.replace(/\n/g, '<br />') }}></h5>
                        <h5 className='about_main_h5' dangerouslySetInnerHTML={{ __html: this.state.Books_api_Chapter_7.replace(/\n/g, '<br />') }}></h5>
                        <h5 className='about_main_h5' dangerouslySetInnerHTML={{ __html: this.state.Books_api_Chapter_Conclusion.replace(/\n/g, '<br />') }}></h5>

                        {/* <h5 className='about_main_h5'>{this.state.Books_api_Chapter_Conclusion.replace(/\\n/g, <br />)}</h5> */}
                        <div className='social_icons'>
                        <h3><i class="fa-solid fa-share-nodes"></i> SHARE </h3>
                        <div className='socail_icon'>
                                    <FacebookShareButton  url={window.location.href}>
                                    <FacebookIcon size={40}  round={true} />
                                </FacebookShareButton>
                                <PinterestShareButton  url={window.location.href}>
                                    <PinterestIcon size={40}  round={true} />
                                </PinterestShareButton>
                                <WhatsappShareButton  url={window.location.href}>
                                    <WhatsappIcon size={40}  round={true} />
                                </WhatsappShareButton>
                                <TwitterShareButton  url={window.location.href}>
                                <VKShareButton  url={window.location.href}>
                                    <VKIcon size={40}  round={true} />
                                </VKShareButton>
                                    <TwitterIcon size={40}  round={true} />
                                </TwitterShareButton>
                              <br/>
                                <LineShareButton  url={window.location.href}>
                                    <LineIcon size={40}  round={true} />
                                </LineShareButton>
                                <RedditShareButton  url={window.location.href}>
                                    <RedditIcon size={40}  round={true} />
                                </RedditShareButton>
                                    
                                <ViberShareButton  url={window.location.href}>
                                    <ViberIcon size={40}  round={true} />
                                </ViberShareButton>
                                <LinkedinShareButton  url={window.location.href}>
                                    <LinkedinIcon size={40}  round={true} />
                                </LinkedinShareButton>
                                <TelegramShareButton  url={window.location.href}>
                                    <TelegramIcon size={40}  round={true} />
                                </TelegramShareButton>
                                <br/>
                                <OKShareButton  url={window.location.href}>
                                    <OKIcon size={40}  round={true} />
                                </OKShareButton>
                                <InstapaperShareButton  url={window.location.href}>
                                    <InstapaperIcon size={40}  round={true} />
                                </InstapaperShareButton>
                                <MailruShareButton  url={window.location.href}>
                                    <MailruIcon size={40}  round={true} />
                                </MailruShareButton>
                                <TumblrShareButton  url={window.location.href}>
                                    <TumblrIcon size={40}  round={true} />
                                </TumblrShareButton>
                                <PocketShareButton  url={window.location.href}>
                                    <PocketIcon size={40}  round={true} />
                                </PocketShareButton>
                                <br/>
                                < WorkplaceShareButton  url={window.location.href}>
                                    <WorkplaceIcon size={40}  round={true} />
                                </ WorkplaceShareButton>
                                <EmailShareButton  url={window.location.href}>
                                    <EmailIcon size={40}  round={true} />
                                </EmailShareButton>
                            </div>
                        </div>

                        
                        <div className='advt__main'>

                        <img className='advt_img' src="https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/Others%2F1.jpg?alt=media&token=6a5e816b-3ad1-4292-b624-83a781135c85"/>  

                        <img className='advt_img' src="https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/Others%2F2.jpg?alt=media&token=2c3ae8a3-b43a-483e-b49a-d8bcc72b9e82"/>   

                        </div>
                    </div>
                    
                    <div className='newMessage newMessageDisplay_box_2'>
                        
                        <h4>Other Christains Books Written By Christ Miracle Church Leaders</h4>
                        <hr className='underline_line'/>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default MessageDisplayMain;