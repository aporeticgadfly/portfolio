//description of skills, process, technologies used, a little about self
//discovery, design, development, launch, aftercare
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ftVis: {display: "block"},
      procVis: {display: "none"},
      ftState: {
        backgroundColor: "black",
        color: "white",
        border: "solid thin white"
      },
      procState: {
        backgroundColor: "white",
        color: "black",
        border: "none"
      },
      filledArr: [null, null, null, null, null, null, null, null, null]
    };
    this.ftClicked = this.ftClicked.bind(this);
    this.procClicked = this.procClicked.bind(this);
    window.self = this;
  }

  ftClicked() {
    this.setState({ftVis: {display: "block"}, procVis: {display: "none"}, ftState: {backgroundColor: "black", color: "white", border: "solid thin white"}, procState: {backgroundColor: "white", color: "black", border: "none"}});
  }

  procClicked() {
    this.setState({ftVis: {display: "none"}, procVis: {display: "block"}, ftState: {backgroundColor: "white", color: "black", border: "none"}, procState: {backgroundColor: "black", color: "white", border: "solid thin white"}});
  }

  componentDidMount() {

    document.querySelector(".aboutDiv").onmouseover = function() {document.querySelector(".abtbtn").style.color = "#8A8D8F";};
    document.querySelector(".aboutDiv").onmouseout = function() {document.querySelector(".abtbtn").style.color = "white";};

    window.onscroll = function() {
      myFunction();
      if (document.querySelector(".skills").getBoundingClientRect().top < 100 && document.querySelector(".skills").getBoundingClientRect().top > -600) {
          var matches = document.querySelectorAll(".filled");
          matches.forEach(function(match) {
            match.classList.add("transit");
          });
      }
      else {
        matches = document.querySelectorAll(".filled");
        matches.forEach(function(match) {
        match.classList.remove("transit");
      });
    }
  }

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";

      var element = document.querySelector('nav');
      var topPos = element.getBoundingClientRect().top;

      if(topPos <= 0) {
        document.querySelector(".flex-column").classList.add("fixed-header");
      }

      if(document.querySelector(".aboutsection").getBoundingClientRect().top >= 130){
        document.querySelector(".flex-column").classList.remove("fixed-header");
      }

    }

    var count = 0;
    document.querySelector(".dropdown").addEventListener("click", function () {
      if(count === 0) {
        document.querySelector(".dropdown-content").classList.add("reveala");
        count = 1;
      }
      else if (count === 1) {
        document.querySelector(".dropdown-content").classList.remove("reveala");
        count = 0;
      }
    });


    /*var arr = [100, 100, 95, 90, 90, 90, 90, 85, 65];
    var countArr = [0,0,0,0,0,0,0,0,0];
    var countpcArr = [0,0,0,0,0,0,0,0,0];
    var elArr = [".htmlp", ".cssp", ".jqueryp", ".javascriptp", ".reactp", ".nodep", ".pythonp", ".mongodbp", ".sqlp"];
    document.querySelector(".aboutservices").onmouseover = function(arr, countArr, countpcArr, elArr) {
      for(var z=0; z<=100; z++){
          for(var i=0; i < arr.length; i++) {
            document.querySelector(elArr[i]).innerHTML(countpcArr[i]);
            if(countArr[i] < arr[i]) {
              countArr[i]++;
            }
            for(var y = 0; y < countArr.length; y++) {
              countpcArr[y] = countArr[y] + "%";
            }
            console.log(countpcArr);
          }

        }

    }; */

}

  render() {
    return (
      <div>
        <nav className="flex-column">
          <a href="#home"><button className="navbtns hmbtn" >HOME</button></a>
          <a href="#about"><button className="navbtns abtbtn" >ABOUT</button></a>
          <a href="#testimonials"><button className="navbtns tstbtn" >TESTIMONIALS</button></a>
          <a href="#contact"><button className="navbtns cntctbtn" >CONTACT</button></a>
          <a href="/projects"><button className="navbtns prtbtn" >PORTFOLIO</button></a>
          <div className="dropdown">
            <button className="dropbtn"><i className="fas fa-bars"></i></button>
            <div className="dropdown-content">
              <hr />
              <a className="dropa" href="#home">HOME</a>
              <hr />
              <a className="dropa" href="#about">ABOUT</a>
              <hr />
              <a className="dropa" href="#testimonials">TESTIMONIALS</a>
              <hr />
              <a className="dropa" href="#contact">CONTACT</a>
              <hr />
              <a className="dropa" href="/projects">PORTFOLIO</a>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
          </div>
        </nav>
        <div className="aboutDiv">
        <a className="none" href="/home#about" id="about">text</a>
        <h1 className="header aboutheader">About</h1>
        <hr className="abouthr"/>
        <div className="aboutsection">
          <div className="aboutself">
            <div className="description" data-aos="fade-left" data-aos-duration="3000">
              <p>I'm a self-taught full-stack web developer from Mississauga, Canada.</p>
              <p>My autodidactic tendencies have led me to study computer technology since I was 13, picking up skills such as pentesting, designing AI, electronics engineering, OS kernel development, and general software development. </p>
              <p>I've taught myself to code in 11+ programming languages fluently, and have utilized some of them to build web applications for businesses and individuals alike.</p>
              <a href="#contact">Let's create something together.</a>
            </div>
            <div><img alt="" className="gif" src={require("../images/coding.gif")} data-aos="fade-right" data-aos-duration="3000"/></div>
          </div>
          <div className="aboutservices">
            <div className="skills" data-aos="fade-right" data-aos-duration="3000">
              <h3>Skills and Aptitudes</h3>
              <hr className="sklhr" />
              <p>HTML</p>
              <div className="empty htmle">
                <div className="filled html"></div>
                <p className="htmlp"></p>
              </div>
              <p>CSS</p>
              <div className="empty csse">
                <div className="filled css"></div>
                <p className="cssp"></p>
              </div>
              <p>jQuery</p>
              <div className="empty jquerye">
                <div className="filled jquery"></div>
                <p className="jqueryp"></p>
              </div>
              <p>JavaScript</p>
              <div className="empty javascripte">
                <div className="filled javascript"></div>
                <p className="javascriptp"></p>
              </div>
              <p>React</p>
              <div className="empty reacte">
                <div className="filled react"></div>
                <p className="reactp"></p>
              </div>
              <p>Node.js and Express.js</p>
              <div className="empty nodee">
                <div className="filled node"></div>
                <p className="nodep"></p>
              </div>
              <p>Python</p>
              <div className="empty pythone">
                <div className="filled python"></div>
                <p className="pythonp"></p>
              </div>
              <p>MongoDB</p>
              <div className="empty mongodbe">
                <div className="filled mongodb"></div>
                <p className="mongodbp"></p>
              </div>
              <p>SQL</p>
              <div className="empty sqle">
                <div className="filled sql"></div>
                <p className="sqlp"></p>
              </div>
            </div>
            <div className="vrtclcrsl" data-aos="fade-up" data-aos-duration="3000">
              <div className="btndv">
                <button id="ft" className="ftbtn" style={this.state.ftState} onClick={this.ftClicked}>Features</button>
                <button id="proc" className="procbtn" style={this.state.procState} onClick={this.procClicked}>Process</button>
              </div>
              <div className="features" style={this.state.ftVis}>
                <div className="vrtitm">
                 <i className="fas fa-lock"></i>
                 <h3>Secure</h3>
                 <p>As a certified CompTIA Pentest+ recipient, I know the ins and outs of cybersecurity. You can rest assured your site will be as hackerproof as possible.</p>
                </div>
                <div className="vrtitm">
                  <i className="fas fa-mobile-alt"></i>
                  <h3>Responsive</h3>
                  <p>My user interface layouts will morph to the size of the device viewing it, meaning your site will always look presentable.</p>
                </div>
                <div className="vrtitm">
                  <i className="fas fa-retweet"></i>
                  <h3>Dynamic</h3>
                  <p>My usage of React and JavaScript allows for a site that changes dynamically according to user input, facilitating smarter user interaction.</p>
                </div>
                <div className="vrtitm">
                  <i className="fas fa-tachometer-alt"></i>
                  <h3>Speedy</h3>
                  <p>You don't want people viewing your site to experience slow loading times and laggy user interaction.</p>
                </div>
              </div>
              <div className="process" style={this.state.procVis}>
                <div className="vrtitm">
                  <i className="fas fa-search"></i>
                  <h3>Discovery</h3>
                  <p>First, an interview detailing your vision for your project is done. Drawings and wireframes are drawn up so that your project will end up looking exactly how you want it to.</p>
                </div>
                <div className="vrtitm">
                  <i className="fas fa-code"></i>
                  <h3>Development</h3>
                  <p>After taking thorough notes on your needs, you leave me to do the heavy lifting. The length of this phase is dependent on the complexity and scale of the project.</p>
                </div>
                <div className="vrtitm">
                  <i className="fas fa-rocket"></i>
                  <h3>Launch</h3>
                  <p>The finished product is subjected to a thorough series of tests, and then deployed to be indexed by the major search engines. Hosting solutions are discussed beforehand.</p>
                </div>
                <div className="vrtitm">
                  <i className="fas fa-briefcase-medical"></i>
                  <h3>Aftercare</h3>
                  <p>Occasionally, your project may need a tuneup, or a technical issue may arise that needs fixing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default About;
