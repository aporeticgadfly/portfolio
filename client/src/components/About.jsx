import React from 'react';
import NavProgress from './NavProgress';
import WorkHd from './WorkHd';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ftVis: {display: "block"},
      procVis: {display: "none"},
      ftState: {
        backgroundColor: "#000000",
        color: "white",
        border: "solid thin white"
      },
      procState: {
        backgroundColor: "white",
        color: "black",
        border: "none"
      },
      spin: {
        animation: "none"
      },
      filledArr: [null, null, null, null, null, null, null, null, null]
    };
    this.ftClicked = this.ftClicked.bind(this);
    this.procClicked = this.procClicked.bind(this);
    this.linkedin = this.linkedin.bind(this);
    this.click = this.click.bind(this);
    this.github = this.github.bind(this);
    window.self = this;
  }

  ftClicked() {
    this.setState({ftVis: {display: "block"}, procVis: {display: "none"}, ftState: {backgroundColor: "#000000", color: "white", border: "solid thin white"}, procState: {backgroundColor: "white", color: "black", border: "none"}});
  }

  linkedin() {
    window.location.href = "https://www.linkedin.com/in/santiago-orellana-67873418b/";
  }

  github() {
    window.location.href = "https://github.com/aptaabye";
  }

  click(number) {
    let linkArr = ['https://handsoffdelta.herokuapp.com', 'https://devpost.com/software/hands-off-7p0mc5', 'https://github.com/yoothomas/Hands-Off', 'https://devpost.com/software/rfid-spoofer', 'https://github.com/aptaabye/RFID-Spoofer'];
    window.location.href = linkArr[number-1];
  }

  procClicked() {
    this.setState({ftVis: {display: "none"}, procVis: {display: "block"}, ftState: {backgroundColor: "white", color: "black", border: "none"}, procState: {backgroundColor: "#000000", color: "white", border: "solid thin white"}});
  }

  componentDidMount() {

    document.querySelector(".aboutDiv").onmouseover = function() {document.querySelector(".abtbtn").style.color = "#5eb3ce";};
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
        document.querySelector(".fixed").classList.add("fixed-header");
      }

      if(document.querySelector(".aboutsection").getBoundingClientRect().top >= 130){
        document.querySelector(".fixed").classList.remove("fixed-header");
      }

    }
}

  render() {
    return (
      <div>
        <NavProgress />
        <div className="aboutDiv">
        <a tabIndex="-1" className="none" href="/home#about" id="about">text</a>
        <h1 className="header aboutheader">About</h1>
        <hr className="abouthr"/>
        <div className="aboutsection">
          <div className="aboutself full">
            <div className="description" data-aos="fade-left" data-aos-duration="3000">
              <p>I'm a self-taught full-stack web developer from Mississauga, Canada.</p>
              <p>My autodidactic tendencies have led me to study computer technology since I was 13, picking up skills such as pentesting, designing AI, electronics engineering, OS kernel development, and general software development. </p>
              <p>I've taught myself to code in 11+ programming languages fluently, and have utilized some of them to build web applications for businesses and individuals alike.</p>
              <a href="#contact">Let's create something together.</a>
            </div>
            <div><img alt="A gif of running code" className="gif" src={require("../images/coding.gif")} data-aos="fade-right" data-aos-duration="3000"/></div>
          </div>
          <div className="linkedin full">
            <div className="left"  data-aos="fade-right" data-aos-duration="3000">
              <div className="headdv mobile">
                <h2>Work Experience</h2>
                <hr className="workhr" />
              </div>
              <img alt="The developer, Santiago" src={require("../images/placeholder.jpeg")} className="me"/>
              <div className="buttonDiv">
                <button aria-label="linkedin link" className="linkedbtn" onClick={this.linkedin}>
                  <i className="fab fa-linkedin"></i>
                </button>
                <button aria-label="github link" onClick={this.github}>
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="right" data-aos="fade-left" data-aos-duration="3000">
              <div className="headdv desktop">
                <h2>Work Experience</h2>
                <hr className="workhr" />
              </div>
              <WorkHd
                jobtitle="Software Engineer"
                company="Vodra"
                firstp="• React, TypeScript, and Firebase software development for a cryptocurrency based startup."
                secondp="• Implemented bidirectional full-duplex streaming functionality between server and client using WebSockets."
                thirdp="• Worked as part of a software development team, communicating updates and adhering to timelines."
              />
              <WorkHd
                jobtitle="Freelance Software Engineer"
                company="Self-Employed"
                firstp="• Developed dynamic, responsive, scalable web applications for clients and small businesses for two years."
                secondp="• Languages and frameworks used include HTML, CSS, JavaScript, Node, Express, MongoDB, MySQL, CockroachDB, Python, Ruby on Rails, React, and jQuery."
                thirdp="• Developed over 30 practice projects and 20+ real world projects for clients, some of which are displayed on my portfolio."
              />
              <WorkHd
                jobtitle="Robotics Instructor"
                company="Institute of Robotics and Intelligent Systems"
                firstp="• Taught and developed curricula relating to hardware and software engineering principles to people of all ages for two years."
                secondp="• Taught eight courses, six of which were self-developed."
                thirdp="• Courses developed include frontend web development, game design, microcontroller/robotics programming with Arduino and Raspberry Pi, ROBOTC, Android development with Java, and Python programming."
              />
            </div>
          </div>
          <div className="accolades full">
            <h2>Accolades</h2>
            <hr className="abouthr"/>
              <div className="adlower">
                <div className="indads" data-aos="fade-down" data-aos-duration="2500">
                  <img alt="" src={require("../images/handsoff.jpg")}/>
                  <div>
                    <h3>Winner of DeltaHacks Medical Engineering Design Award</h3>
                    <p>Competed with 800 others in McMasters DeltaHacks Hackathon and won the Medical Engineering Design award for our entry.</p>
                    <p>Dual project named Hands Off, coming in the form of both a python app and a wearable device. Both aim to mitigate the spread of covid-19 by limiting the amount of contact with mucous membranes. </p>
                    <p>Sole ideator, implemented backend CockroachDB integration, designed project website with React, and designed wearable.</p>
                    <div className="acBtnDiv">
                      <button onClick={() => this.click(1)}>View Project Website</button>
                      <button onClick={() => this.click(2)}>View Devpost Submission</button>
                      <button onClick={() => this.click(3)}>View Code on GitHub</button>
                    </div>
                  </div>
                </div>
                <div className="indads" data-aos="fade-down" data-aos-duration="2500">
                  <img alt="" src={require("../images/rfid.jpg")}/>
                  <div>
                    <h3>Winner of HackPSUs Best Hardware Hack and AF Award</h3>
                    <p>Competed with over 900 other students from around the world in Penn State University's hackathon. Won not one but two awards for Best Hardware Hack and Audience Favourite. One from the judges, and one from the contestants.</p>
                    <p>Project in question was an RFID Spoofer, device that was able to capture an RFID signal from PICCs such as hotel cards, and emulating said RFID signals.  In this manner, with previous access to the PICC, one can gain access to whatever that RFID signal unlocks.</p>
                    <p>Sole ideator, coded brute force function, designed circuit, and assisted with the main code.</p>
                    <div className="acBtnDiv">
                      <button onClick={() => this.click(4)}>View Devpost Submission</button>
                      <button onClick={() => this.click(5)}>View Code on GitHub</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="aboutservices full">
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
                 <h3 className="coloured">Secure</h3>
                 <p>As a certified CompTIA Pentest+ recipient, I know the ins and outs of cybersecurity. You can rest assured your site will be as hackerproof as possible.</p>
                </div>
                <div className="vrtitm">
                  <i className="fas fa-mobile-alt"></i>
                  <h3 className="coloured">Responsive</h3>
                  <p>My user interface layouts will morph to the size of the device viewing it, meaning your site will always look presentable.</p>
                </div>
                <div className="vrtitm">
                  <i className="fas fa-retweet"></i>
                  <h3 className="coloured">Dynamic</h3>
                  <p>My usage of React and JavaScript allows for a site that changes dynamically according to user input, facilitating smarter user interaction.</p>
                </div>
                <div className="vrtitm">
                  <i className="fas fa-tachometer-alt"></i>
                  <h3 className="coloured">Speedy</h3>
                  <p>You don't want people viewing your site to experience slow loading times and laggy user interaction.</p>
                </div>
              </div>
              <div className="process" style={this.state.procVis}>
                <div className="vrtitm">
                  <i className="fas fa-search"></i>
                  <h3 className="coloured">Discovery</h3>
                  <p>First, an interview detailing your vision for your project is done. Drawings and wireframes are drawn up so that your project will end up looking exactly how you want it to.</p>
                </div>
                <div className="vrtitm">
                  <i className="fas fa-code"></i>
                  <h3 className="coloured">Development</h3>
                  <p>After taking thorough notes on your needs, you leave me to do the heavy lifting. The length of this phase is dependent on the complexity and scale of the project.</p>
                </div>
                <div className="vrtitm">
                  <i className="fas fa-rocket"></i>
                  <h3 className="coloured">Launch</h3>
                  <p>The finished product is subjected to a thorough series of tests, and then deployed to be indexed by the major search engines. Hosting solutions are discussed beforehand.</p>
                </div>
                <div className="vrtitm">
                  <i className="fas fa-briefcase-medical"></i>
                  <h3 className="coloured">Aftercare</h3>
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
