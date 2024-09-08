// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCm0p0CsIAdB3tpwVmND6zF5o-ptdovKLI",
  authDomain: "the-christ-miracles-church.firebaseapp.com",
  projectId: "the-christ-miracles-church",
  storageBucket: "the-christ-miracles-church.appspot.com",
  messagingSenderId: "500835849232",
  appId: "1:500835849232:web:87e3662a1f34faf5d56695"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional: Customize notification handling
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png', // Optional icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
