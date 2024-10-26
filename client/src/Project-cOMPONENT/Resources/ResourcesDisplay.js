import React, { Component } from 'react';
import moment from 'moment'
import { Helmet } from 'react-helmet';
import './ResourcesDisplay.css'
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
class ResourcesDisplay extends Component {
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
            social_on_image_label: '',
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
        const social_on_image_label = localStorage.getItem('social_on_image_label')


        this.setState({ 
            Books_api_id,
            Books_api_name,
            Books_api_title,
            Books_api_date,
            social_on_image,
            social_on_image_label,
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
            <div classNam='ResourcesDisplay'>
                   <Helmet>
                    <base />
                    <title>Angels Seen Hovering Over Jerusalem – A Divine Sign from God!</title>
                    <meta name="title" content="Angels Seen Hovering Over Jerusalem – A Divine Sign from God!" />
                    <meta name="description" content="Dear Beloved in Christ,
                    We are witnessing something truly miraculous! Angels have been seen hovering over the holy city of Jerusalem—a sign that is filling believers worldwide with awe and wonder. This divine occurrence serves as a powerful reminder of God's continued presence and protection over His people." />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://metatags.io/" />
                    <meta property="og:title" content="Angels Seen Hovering Over Jerusalem – A Divine Sign from God!" />
                    <meta property="og:description" content="Dear Beloved in Christ,
                    We are witnessing something truly miraculous! Angels have been seen hovering over the holy city of Jerusalem—a sign that is filling believers worldwide with awe and wonder. This divine occurrence serves as a powerful reminder of God's continued presence and protection over His people." />
                    <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://metatags.io/" />
                    <meta property="twitter:title" content="Angels Seen Hovering Over Jerusalem – A Divine Sign from God!" />
                    <meta property="twitter:description" content="Dear Beloved in Christ,
                    We are witnessing something truly miraculous! Angels have been seen hovering over the holy city of Jerusalem—a sign that is filling believers worldwide with awe and wonder. This divine occurrence serves as a powerful reminder of God's continued presence and protection over His people." />
                    <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

                </Helmet>
                <section className='ResourcesDisplayMain'>
                    <h1>hello</h1>
                </section>
                
            </div>
         );
    }
}
 
export default ResourcesDisplay;