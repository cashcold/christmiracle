import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCm0p0CsIAdB3tpwVmND6zF5o-ptdovKLI",
    authDomain: "the-christ-miracles-church.firebaseapp.com",
    projectId: "the-christ-miracles-church",
    storageBucket: "the-christ-miracles-church.appspot.com",
    messagingSenderId: "500835849232",
    appId: "1:500835849232:web:87e3662a1f34faf5d56695"
  };

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BJVh6ErHGHwRrE6ow029X5hU3IZpxEtezXhMd40HxxScr_CAs-vDa81jeca5VgZ-RVoEEmse3LQ9MbCn7grx0_s",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();