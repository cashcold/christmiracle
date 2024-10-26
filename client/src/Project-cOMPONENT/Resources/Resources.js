import React, { Component } from 'react';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { resources_api } from '../API/resources_api';  // Using resources_api now
import './Resources.css';

class ResourcesMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resources_api: resources_api  // Updated to resources_api
        };
    }

    componentDidMount() {
        console.log(this.state.resources_api);
    }

    render() {
        return (
            <div className='mainMessage'>
                <Helmet>
                    <base />
                    <title>Rosources</title>
                    <meta name="description" content="Read about the miraculous event " />
                    <link rel="canonical" href="somelink" />
                </Helmet>
                
                <section className='motivation_text'>
                    <h3>The End Time</h3>
                </section>

                <section className='messageNow'>
                    <div className='newMessage newMessage_box_1'>
                        <h2>Event Highlights</h2>
                        <div className='display_message'>
                            {this.state.resources_api.map(data => (
                                <div className='message_flow_home' key={data.id}>
                                    <h4 dangerouslySetInnerHTML={{ __html: data.title.replace(/\n/g, '<br />') }}></h4>
                                    <img className='social_img' src={data.social_on_image} alt={data.name} />

                                    <div className='icon_star'>
                                        {[...Array(5)].map((_, index) => (
                                            <i key={index} className="fas fa-star"></i>
                                        ))}
                                    </div>

                                    <div className='viewed_tag'>
                                        <span><i className="fa-solid fa-eye"></i> Viewed {data.eye_seen}</span>
                                    </div>

                                    <p>By {data.name}</p>
                                    <span><i className="fa fa-clock-o"></i> <span>{moment(data.date).format('LLLL')}</span></span>
                                    
                                    <h4 className='desc_text'>{data.description}</h4>

                                    <button
                                        onClick={() => {
                                            localStorage.setItem('resources_api_id', data.id);
                                            localStorage.setItem('resources_api_name', data.name);
                                            localStorage.setItem('resources_api_title', data.title);
                                            localStorage.setItem('social_on_image', data.social_on_image);

                                            const paramsUrl = {
                                                head_Text_url: data.head_Text_url,
                                                Chapter_Info: data.Chapter_Info,
                                                social_on_image: data.social_on_image
                                            };

                                            const queryParams = require('query-string');
                                            const passParams = queryParams.stringify(paramsUrl);

                                            window.location = `/Resources-info/${data.id}?${passParams}`;
                                        }}
                                        className='btn btn-warning btn_readMore'>
                                        Read More &#8594;
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='newMessage newMessage_box_2'>
                        <h4>Find Out More About Missions and Evangelism</h4>
                        <button className='btn btn-warning'>Find Out</button>
                        <hr className='underline_line' />
                    </div>
                </section>
            </div>
        );
    }
}

export default ResourcesMain;
