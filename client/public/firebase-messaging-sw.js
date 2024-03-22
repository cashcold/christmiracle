// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.7/firebase-messaging.js');



self.addEventListener('push', function(event) {
  const payload = event.data ? event.data.text() : 'no payload';
  event.waitUntil(self.registration.showNotification('Title', {
    body: payload,
  }));
});


const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Add an event listener to handle push notifications
self.addEventListener('push', event => {
  const payload = event.data.json();
  // Customize how you want to display the push notification
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  event.waitUntil(self.registration.showNotification(payload.notification.title, notificationOptions));
});

