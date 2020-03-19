//jshint esversion:6
require('dotenv').config()

const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');

const withAuth = require('./middleware');

const username = 'admin';
const password = '90337426252-Shamballa';
const secret = 'admvsofvnwoienf';

const app = express();

var authenticated = false;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors({
  origin: "https://protected-forest-85499.herokuapp.com",
  credentials: true
}));
app.use(cookieParser());

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

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get("/home", function(req, res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
});

app.get("/projects", function(req, res){
  var projArr = [];
  Project.find({}, function(err, projects) {
    if(err){
      console.log(err);
    }
    else {
      console.log(projects);
      for(var i = 0; i < projects.length; i++) {
          console.log("test");
          projArr.push({
            _id: projects[i]._id,
            title: projects[i].title,
            desc: projects[i].description,
            imageUrls: projects[i].imageUrls,
            link: projects[i].link
        });
        //res.send(projArr);
        console.log(projArr);
      }
    }
    res.send(projArr);
  });
});


app.get("/posts/:postId", function(req, res){

const requestedProjectId = req.params.projectId;

  Project.findOne({_id: requestedProjectId}, function(err, project){
    res.render("project", {
      title: req.body.projectTitle,
      description: req.body.projectDescription,
      link: req.body.projectLink,
      code: req.body.projectCode,
      imageUrls: req.body.projectImageUrls
    });
  });
});

app.post("/home", function(req, res) {
  const contact = new Contact({
    emailAddress: req.body.email,
    content: req.body.msg
  });


  contact.save(function(err){
    if (!err){
        res.redirect("/home");
    }
  });
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

app.get('/compose', withAuth, function(req, res) {
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

app.listen(process.env.PORT, function() {
  console.log("Server started on port 5002");
});
