//jshint esversion:6
require('dotenv').config()

const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
const axios = require('axios');
const nodemailer = require('nodemailer');
const validator = require('validator');

const withAuth = require('./middleware');
const forceHttps = require('./forceHttps');
const hredirect = require('./herokuredirect');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const secret = process.env.SECRET;

const app = express();

var authenticated = false;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
if (process.env.NODE_ENV != 'development') {
  app.use(express.static(path.join(__dirname, "client/build")));
}
else {
  app.use(express.static(path.join(__dirname, "client/public")));
}

const allowedOrigins = ['https://www.santiagoorellana.com',
                      'http://localhost:3000', 'https://santiagoorellana.herokuapp.com', 'https://santiagoorellana.com'];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.use(cookieParser());
app.enable('trust proxy');
app.use(forceHttps);
app.use(hredirect);

mongoose.connect(process.env.MONGO, {useNewUrlParser: true});

const projectSchema = {
  title: String,
  description: String,
  link: String,
  imageUrls: Array
};

const contactSchema = {
  emailAddress: String,
  content: String
};

const Project = mongoose.model("Project", projectSchema);
const Contact = mongoose.model("Contact", contactSchema);

let transport = nodemailer.createTransport({
   host: 'mail.privateemail.com',
   port: 465,
   auth: {
     user: process.env.EMAIL_USERNAME,
     pass: process.env.EMAIL_PASSWORD
   }
});

app.get("/home", hredirect, forceHttps, function(req, res) {
    res.sendFile(path.join(__dirname+process.env.SERVE_PATH));
});

app.get('/linkedin', function(req, res) {
  res.redirect("https://www.linkedin.com/in/santiago-orellana-67873418b/");
})

app.get("/projects", function(req, res) {
  res.sendFile(path.join(__dirname+process.env.SERVE_PATH));
});

app.get("/authenticate", function(req, res) {
  res.sendFile(path.join(__dirname+process.env.SERVE_PATH));
});

app.get("/compose", function(req, res) {
  res.sendFile(path.join(__dirname+process.env.SERVE_PATH));
});

app.get("/unsplash", function(req, res) {
  var key = process.env.UNSPLASH_KEY;
  var link = 'https://api.unsplash.com/collections/d1m7gMO3M7E/photos/?client_id=' + key;
  res.set('Access-Control-Allow-Origin', 'https://www.santiagoorellana.com');

  axios.get(link)
    .then(response => {
      var rand = Math.round(Math.random() * 5);
      var pkg = {
        image: response.data[rand].urls.regular,
        name: response.data[rand].user.name,
        link: response.data[rand].user.links.html
      };
      res.send(pkg);
    })
    .catch(err => console.log(err));
})

app.get("/singleproject", function(req, res) {
  res.sendFile(path.join(__dirname+process.env.SERVE_PATH));
});

app.get("/projectss", function(req, res){
  var projArr = [];
  Project.find({}, function(err, projects) {
    if(err){
      console.log(err);
    }
    else {
      for(var i = 0; i < projects.length; i++) {
          projArr.push({
            _id: projects[i]._id,
            title: projects[i].title,
            desc: projects[i].description,
            imageUrls: projects[i].imageUrls,
            link: projects[i].link
        });
      }
    }
    res.send(projArr);
  });
});

app.post("/home", function(req, res) {
  if(validator.isEmail(req.body.email + '')) {
    const contact = new Contact({
      emailAddress: req.body.email,
      content: req.body.msg
    });

    contact.save(function(err){
      if (!err){
      }
    });

    const sent = {
      from: 'santiago@santiagoorellana.com',
      to: 'santiago@santiagoorellana.com',
      subject: 'Node Mailer',
      text: 'From: ' + req.body.email+ ' Message: ' + req.body.msg
    };

    const received = {
      from: 'santiago@santiagoorellana.com',
      to: req.body.email,
      subject: 'Node Mailer',
      text: 'Your message has been received'
    };

    transport.sendMail(sent, function(err, info) {
      if (err) {
        console.log(err)
        res.status(401).end();
      }
    });
    transport.sendMail(received, function(err, info) {
      if (err) {
        console.log(err)
      }
    });
    console.log("fire");
    res.status(200).end();
  }
  else {
    res.status(400).end();
  }
});

app.post('/authenticate', (req, res) => {
  const {username, password} = req.body;
  if(req.body.username === process.env.USERNAME && req.body.password === process.env.PASSWORD) {
          console.log('match');
          const payload = {username};
          const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '1h'
          });
          console.log(token);

          res.cookie('token', token, { httpOnly: true }).sendStatus(200);
    }
    else {
      console.log("nomatch");
      res.sendStatus(401);
    }
});

app.get('/composes', withAuth, function(req, res) {
  res.send({authenticateRequest: true});
  res.sendStatus(200);
});

app.post('/compose', withAuth, function(req, res) {
  const project = new Project({
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
      imageUrls: req.body.imageUrls
  });

  project.save(function(err) {
    if(!err) {
      res.redirect("/compose");
    }
  })
});

app.get('/', function(req, res) {
  console.log('base url');
  res.redirect(process.env.URL);
})

app.listen(process.env.PORT, function() {
  console.log("Server started on: "+process.env.PORT);
});
