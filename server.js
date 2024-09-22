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
// app.use(express.static(path.join(__dirname, "client")));
// app.use(express.static(path.join(__dirname, 'client', 'build')));



app.use(cors())
app.use(bodyParser.json())
app.use('/users',userRouter)


const Subscription = require('./UserModel/Subscription')


const publicVapidKey =
  "BMVoVa091u1HIO9tr5ksdHaJleTqt4lFjkg7N_emTP1IzAwt6-B9NmmelAQP4beoxSpshJ0Kage490LVd8d-VZU";
const privateVapidKey = "l8UN9HvyjNC6mHwsnpPxt-ACbPPF59p2vj7srEn4XTs";
 
webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);




//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
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
    data = data.replace(/\$OG_TITLE/g, "Discover a Treasure Trove of Free Christian Books!");
    data = data.replace(/\$OG_DESCRIPTION/g, "Unlock a world of spiritual enrichment with our collection of free Christian books. Dive into timeless classics, explore profound teachings, and immerse yourself in uplifting narratives—all at your fingertips, completely free of charge. Whether you're seeking inspiration, guidance, or simply a moment of reflection, our library has something for everyone. Don't miss out on this opportunity to enrich your faith journey. Start reading today and let the wisdom of these timeless texts illuminate your path");
    result = data.replace(/\$OG_IMAGE/g, "https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/images%2Fbooks_label.jpg?alt=media&token=534fd1c4-9919-4a00-8105-db4e90350fff");
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

app.get('/music', function(request, response) {
  const filePath = path.resolve(__dirname, './client/build' ,'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Promote Your Gospel Song for Free!, Are you a gospel singer hoping to make an impact with your music?");
    data = data.replace(/\$OG_DESCRIPTION/g, "Our platform offers an incredible opportunity for gospel artists to showcase their talent to a global audience. Whether you're a seasoned performer or just starting your musical journey, we're here to support you every step of the way.");
    result = data.replace(/\$OG_IMAGE/g, 'https://firebasestorage.googleapis.com/v0/b/thechristmiracles.appspot.com/o/images%2Fpromote_song_www.tcmci.org.jpg?alt=media&token=1830c185-d173-4e59-aaa8-7620af44b4a5');
    response.send(result);
  });
});


app.get('/music_box/:id', function(request, response) {
 
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
                   
    const {info, name, on_image} = qdata


// replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g,name);
    data = data.replace(/\$OG_DESCRIPTION/g,info);
    result = data.replace(/\$OG_IMAGE/g,on_image);
    response.send(result);
  });

});





app.post('/subscribe', async (req, res) => {
  const subscription = req.body;

  try {
    // Save subscription to the database
    await Subscription.create({
      endpoint: subscription.endpoint,
      keys: subscription.keys
    });

    res.status(201).json({});

    // Send a test notification (optional)
    const payload = JSON.stringify({ title: 'The Christ Miracles Church Intl.' });
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
  } catch (error) {
    res.status(500).json({ error: 'Failed to save subscription' });
  }
});


app.post('/sendNotification', async (req, res) => {
  const { title, message } = req.body;

  try {
    const subscriptions = await Subscription.find();

    const payload = JSON.stringify({ title, message });

    const notificationPromises = subscriptions.map(subscription =>
      webpush.sendNotification(subscription, payload)
    );

    await Promise.all(notificationPromises);

    res.status(200).json({ message: 'Notifications sent' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send notifications' });
  }
});




// app.use(express.static("client/build"))
// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static("client/build"))
//   app.get('*',(req,res)=>{
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })

// }

app.listen(PORT,()=>{
    console.log(`server is runing on local Port Number ${PORT}`)
})