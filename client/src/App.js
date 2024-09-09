import React, { Component } from 'react';
import './App.css';
// import './client';
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
import MusicBox_1 from './Project-cOMPONENT/Music_Box/Box_Music_1/Music_box_1';
import MusicLinkBox from './Project-cOMPONENT/Music_Box/MusicLinkBox/music_link_box';
import ResourcesMain from './Project-cOMPONENT/Resources/Resources';
import axios from 'axios';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      this.registerServiceWorker();
    }
  }

  registerServiceWorker = async () => {
    try {
      const registration = await navigator.serviceWorker.register('/worker.js');
      console.log('Service Worker Registered');

      const subscription = await this.subscribeUserToPush(registration);
      if (subscription) {
        await this.sendSubscriptionToServer(subscription);
      }
    } catch (error) {
      console.error('Error during service worker registration:', error);
    }
  };

  subscribeUserToPush = async (registration) => {
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: this.urlBase64ToUint8Array('BMVoVa091u1HIO9tr5ksdHaJleTqt4lFjkg7N_emTP1IzAwt6-B9NmmelAQP4beoxSpshJ0Kage490LVd8d-VZU') // Replace with your public VAPID key
    });
    console.log('User is subscribed:', subscription);
    return subscription;
  };

  sendSubscriptionToServer = async (subscription) => {
    await axios.post('/subscribe', subscription);
  };

  urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };
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
                <Route path='/music' component={MusicBox_1} />
                <Route path='/music_box/:id' component={MusicLinkBox} />
                <Route path='/Resources' component={ResourcesMain} />
                {/* <Route path='/audio' component={AudioMain} /> */}
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
