import { getMessaging } from "firebase/messaging";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCm0p0CsIAdB3tpwVmND6zF5o-ptdovKLI",
  authDomain: "the-christ-miracles-church.firebaseapp.com",
  projectId: "the-christ-miracles-church",
  storageBucket: "the-christ-miracles-church.appspot.com",
  messagingSenderId: "500835849232",
  appId: "1:500835849232:web:87e3662a1f34faf5d56695"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

function initializeFirebaseMessaging(registration) {
  // Initialize Firebase messaging object with the provided registration object
  messaging.useServiceWorker(registration);

  // Handle messaging events...
}

export { messaging, initializeFirebaseMessaging };
