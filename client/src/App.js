import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavbarMain from './Project-cOMPONENT/Navbar/navbar';
import HomeMain from './Project-cOMPONENT/Home/home';
import AimMain from './Project-cOMPONENT/Aims/aim';
import MissionMain from './Project-cOMPONENT/Mission/mission';
import Pictures from './Project-cOMPONENT/Pictures/pictures';
import ContactMain from './Project-cOMPONENT/Contact-us/contact-us';
import MessageMain from './Project-cOMPONENT/Message/message';
import AudioMain from './Project-cOMPONENT/Audio/audio';
import FooterMain from './Project-cOMPONENT/Footer/footer';
import SlibebarMain from './Project-cOMPONENT/Slibebar/slibebar';
import OtherPicture from './Project-cOMPONENT/otherPicture/otherPicture';
class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Router>
                <div className='mainApp animate__animated animate__zoomIn animate__slowerss'>
                    <div className='container'>
                        <NavbarMain/>  
                        <div className='router'>
                           <Switch>
                              <Route path='/' exact component={HomeMain}/> 
                              <Route path='/contact' component={ContactMain}/>
                              <Route path='/aim' component={AimMain}/>
                              <Route path='/mission' component={MissionMain}/>
                              <Route path='/pictures' component={Pictures}/>
                              <Route path='/other_pictures' component={OtherPicture}/>
                              <Route path='/message' component={MessageMain}/>
                              <Route path='/audio' component={AudioMain}/>
                              <Route path='/slibe' component={SlibebarMain}/>
                           </Switch>
                        </div>
                        <FooterMain/>
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;