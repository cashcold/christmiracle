import React, { Component } from 'react';
import moment from 'moment'
import { Helmet } from 'react-helmet';
import './Resources.css'

class ResourcesMain extends Component {
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

        
        
        return ( 
            <div classNam='ResourcesMain'>
                 <h1>Resources Main</h1>
            </div>
         );
    }
}
 
export default ResourcesMain;