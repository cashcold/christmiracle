const express = require('express')
const webpush = require("web-push");
const cors = require('cors')
const dotEnv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRouter = require('./Router/userRouter')
const path = require('path')
const fs = require('fs');

dotEnv.config()


mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true },()=>{
    console.log('DataBase Connented Successful')
})
const PORT = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/users',userRouter)


// app.use(express.static(path.join(__dirname, 'client', 'build')));
const publicVapidKey =
  "BMESG41bsR0sb2wCGVefwrpozSBoT1TQWoq4iqOvuifmDvXJxWL4gBqgLzXyNHrfKB6Odv4NFZg381APFDV5VwY";
const privateVapidKey = "b5krQRhwejbVCGIEYEG-3vNvj0bfTDhavanNpkwKJhs";
 
webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);


app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Push Test" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});



app.get('/', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build' ,'index.html');
  
    // read in the index.html file
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g, '🌟✝️🕊️ Embracing Grace: The Transformative Power of Walking with Jesus Christ');
      data = data.replace(/\$OG_DESCRIPTION/g, "In the footsteps of our Savior, we discover the profound grace that transforms hearts and lives. Join us on this journey of faith, where every step is guided by love, forgiveness, and the eternal promise of redemption. Let the light of Jesus shine in your life. 💖✝️🌟 #InHisFootsteps #GraceUnleashed #JesusChrist #FaithJourney");
      result = data.replace(/\$OG_IMAGE/g, 'https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/others_Main%2FchristImg.jpg?alt=media&token=17934020-593d-4122-84a7-841f282c3202');
      response.send(result);
    });
  });

  
app.get('/books', function(request, response) {
  const filePath = path.resolve(__dirname, './client/build' ,'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Journey Through Faith: 📖 Exploring the Pages of 'Hearts Renewed' 🌟");
    data = data.replace(/\$OG_DESCRIPTION/g, "Dive into the transformative pages of  'Hearts Renewed,' a soul-stirring journey of faith, love, and redemption. 🌟 Immerse yourself in the profound stories that illuminate the path to a renewed heart and a deeper connection with God. Join us on this inspiring literary adventure. 📚✝️💖 #HeartsRenewed #ChristianBooks #FaithJourney #BookLovers");
    result = data.replace(/\$OG_IMAGE/g, 'https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/others_Main%2FchristImg.jpg?alt=media&token=17934020-593d-4122-84a7-841f282c3202');
    response.send(result);
  });
});

app.get('/christains_books/:id', function(request, response) {
 
  const filePath = path.resolve(__dirname, './client/build' ,'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    
    const parsed = (request.url)
    var url = require('url');

    var q = url.parse(parsed, true);

    var qdata = q.query
    
    const {head_Text_url, Chapter_Info, social_on_image} = qdata

    console.log(qdata)


// replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g,head_Text_url);
    data = data.replace(/\$OG_DESCRIPTION/g,Chapter_Info);
    result = data.replace(/\$OG_IMAGE/g,social_on_image);
    response.send(result);
  });

});



app.use(express.static("client/build"))
if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"))
  app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

app.listen(PORT,()=>{
    console.log(`server is runing on local Port Number ${PORT}`)
})