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
import Footer from './Project-cOMPONENT/Footer/footer';
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
                              <Route path='/message' component={MessageMain}/>
                              <Route path='/audio' component={AudioMain}/>
                              <Route path='/footer' component={Footer}/>
                           </Switch>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;