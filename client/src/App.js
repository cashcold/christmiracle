import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import VideosMain from './Project-cOMPONENT/Videos/videos';
import MessageDisplayMain from './Project-cOMPONENT/Message/messageDisplay';
import firebase from 'firebase/app';
import 'firebase/messaging';


class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCm0p0CsIAdB3tpwVmND6zF5o-ptdovKLI",
      authDomain: "the-christ-miracles-church.firebaseapp.com",
      projectId: "the-christ-miracles-church",
      storageBucket: "the-christ-miracles-church.appspot.com",
      messagingSenderId: "500835849232",
      appId: "1:500835849232:web:87e3662a1f34faf5d56695"
    };
    
    
 
  }

  render() {
    return (
      <Router>
        <div className='mainApp '>
          <div className='container'>
            <NavbarMain />
            <div className='router'>
              <Switch>
                <Route path='/' exact component={HomeMain} />
                <Route path='/contact' component={ContactMain} />
                <Route path='/aim' component={AimMain} />
                <Route path='/mission' component={MissionMain} />
                <Route path='/mission_pictures' component={Pictures} />
                <Route path='/other_pictures' component={OtherPicture} />
                <Route path='/books' component={MessageMain} />
                <Route path='/christains_books/:id' component={MessageDisplayMain} />
                <Route path='/audio' component={AudioMain} />
                <Route path='/videos' component={VideosMain} />
                <Route path='/slibe' component={SlibebarMain} />
              </Switch>
            </div>
            <FooterMain />
          </div>
        </div>
      </Router>
    );
  }
}

export default MainApp;
