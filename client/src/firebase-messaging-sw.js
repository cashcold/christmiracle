

// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.7/firebase-messaging.js');

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

self.addEventListener('push', function(event) {
  const payload = event.data ? event.data.text() : 'no payload';
  event.waitUntil(self.registration.showNotification('Title', {
    body: payload,
  }));
});
