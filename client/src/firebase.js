// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyCm0p0CsIAdB3tpwVmND6zF5o-ptdovKLI",
    authDomain: "the-christ-miracles-church.firebaseapp.com",
    projectId: "the-christ-miracles-church",
    storageBucket: "the-christ-miracles-church.appspot.com",
    messagingSenderId: "500835849232",
    appId: "1:500835849232:web:87e3662a1f34faf5d56695"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging.getToken({ vapidKey: 'YOUR_PUBLIC_VAPID_KEY' })
    .then((currentToken) => {
      if (currentToken) {
        setTokenFound(true);
        console.log('Current token: ', currentToken);
        return currentToken;
      } else {
        setTokenFound(false);
        console.log('No token available.');
      }
    })
    .catch((err) => {
      console.log('Error occurred while retrieving token: ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
