const express = require('express')
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

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    }) 
}


app.get('/', function(request, response) {
    const filePath = path.resolve(__dirname, './client/build' ,'index.html');
  
    // read in the index.html file
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g, 'The Christ Miracles Chruch International');
      data = data.replace(/\$OG_DESCRIPTION/g, "Join The Growing Christain Platform to lean more and also steam evry church program Online ");
      result = data.replace(/\$OG_IMAGE/g, 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
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
    data = data.replace(/\$OG_TITLE/g, 'Christians books and other sunday material');
    data = data.replace(/\$OG_DESCRIPTION/g, "Read Free Sunday Material From The Christ Miracles church Intl. Online ");
    result = data.replace(/\$OG_IMAGE/g, 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    response.send(result);
  });
});

app.get('/books/:id', function(request, response) {
 
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
    
    const {name, info, on_image} = qdata

    console.log(qdata)


// replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g,name);
    data = data.replace(/\$OG_DESCRIPTION/g,info);
    result = data.replace(/\$OG_IMAGE/g,on_image);
    response.send(result);
  });

});


app.listen(PORT,()=>{
    console.log(`server is runing on local Port Number ${PORT}`)
})