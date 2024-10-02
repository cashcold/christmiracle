import React, { Component } from 'react';
import {resources_api } from '../API/resources_api'
import moment from 'moment'
import { Helmet } from 'react-helmet';
import './Resources.css'

class ResourcesMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            resources_api: resources_api,
         }
    }
    componentDidMount(){
        console.log(this.state.resources_api)


    }
    render() { 

        console.log(this.state.resources_api)
        
        return ( 
            <div classNam='ResourcesMain'>
                 <h1>Resources Main</h1>
            </div>
         );
    }
}
 
export default ResourcesMain;