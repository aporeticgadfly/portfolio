import React from 'react';
import Proj from './Proj';
import Title from './Title';
import About from './About';
import Authenticate from './Authenticate';
import SingleProject from './SingleProject';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Input from './Input';
import Compose from './Compose';
import axios from 'axios';
import configData from '../config.json';
import 'animate.css';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projectsList: [0], username: '', password: '', proj: [{title: '', desc: '', link: '', imageUrls: ['']}], projArr: [], projectToRender: ''};
    this.createProject = this.createProject.bind(this);
    this.projectClick = this.projectClick.bind(this);
    this.createSingleProject = this.createSingleProject.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePwd = this.onChangePwd.bind(this);
    this.submitClick = this.submitClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onChangeUser(event, e) {
    this.setState({username: event.target.value});
  }

  onChangePwd(event, e) {
    this.setState({password: event.target.value});
  }

  handleChange(event, e) {
    this.setState({search: event.target.value.toLowerCase()}, () => {

      var arr = [];
      for(var g=0; g < this.state.proj.length; g++) {
        if(this.state.proj[g].title.toLowerCase().startsWith(this.state.search)) {
          arr.push(g);
        }
      }
      this.setState({projectsList: arr}, () => {
      });
    });
  }

  submitClick (e) {
    e.preventDefault();
    var formData = {
      username: this.state.username,
      password: this.state.password
    };

    const transport = axios.create({
      withCredentials: true
    });

    transport.post(configData.SERVER_URL+'/authenticate', formData).then(res => {console.log(res.data)}).catch(err => console.log(err));
  }

  componentDidMount() {

    axios.get(configData.SERVER_URL+'/home')
      .catch(
        err => console.log(err)
      );

    axios.get(configData.SERVER_URL+'/projectss')
    .then(
      res => {
        this.setState({proj: this.state.proj.concat(res.data)});
        for(var z=0; z < this.state.proj.length - 1; z++) {
          this.setState({projectsList: this.state.projectsList.concat(z + 1)}, () => {

          });
      }
      })
      .catch(
        err => console.log(err)
      );
  }

  createProject(proj, index){
    if(proj !== 0) {
      return(
        <div className="projectCard" key = {this.state.proj[proj]._id}>
          <Link to= {"/singleproject/"+this.state.proj[proj]._id} className="projLink" style={{textDecoration: "none"}}>
            <Proj
              key = {this.state.proj[proj]._id}
              id = {this.state.proj[proj]._id}
              image = {this.state.proj[proj].imageUrls[0]}
              title = {this.state.proj[proj].title}
              description = {this.state.proj[proj].desc}
              projectClick = {this.projectClick}
            />
          </Link>
        </div>
      );
    }
  }

  projectClick(projectClicked, e) {
    this.setState({projectToRender:projectClicked});
  }

  createSingleProject(){

    for(var y = 1; y < this.state.proj.length; y++) {
      if(this.state.projectToRender === this.state.proj[y]._id)
      {
        var projClicked = this.state.proj[y];
        break;
      }
    }

    if(projClicked === undefined) {
      projClicked = {
        _id: '',
        imageUrls: '',
        desc: '',
        title: '',
        link: ''
      };
    }

    return(
      <div className="sprojback">
        <Link to="/projects">
          <button className="backbtn"><i  className="fas fa-arrow-left"></i><span>Back</span></button>
        </Link>
        <SingleProject
          key = {projClicked._id}
          id = {projClicked._id}
          images = {projClicked.imageUrls}
          description = {projClicked.desc}
          title = {projClicked.title}
          link = {projClicked.link}
        />
      </div>
    );
  }

  render() {
  return (
    <Switch>
      <Route path="/home">
        <Title />
        <About />
        <Testimonials />
        <Contact />
      </Route>
      <Route path="/projects">
        <div className="prjfll">
          <div className="prjttl">
            <h2>Projects</h2>
            <nav className="prjnv">
              <a tabIndex="-1" className="init" href="home#home"><button className="prjnvbtn homeb" ><p>Home</p></button></a>
              <a tabIndex="-1" href="home#about"><button className="prjnvbtn aboutb" ><p>About</p></button></a>
              <a tabIndex="-1" href="home#testimonials"><button className="prjnvbtn testb" ><p>Testimonials</p></button></a>
              <a tabIndex="-1" href="home#contact"><button className="prjnvbtn contactb" ><p>Contact</p></button></a>
            </nav>
            <Input handleChange={this.handleChange}/>
            <div className="dropdownp">
              <button className="dropbtnp"><i className="fas fa-bars"></i></button>
            </div>
          </div>
          <div className="dropdown-contentp">
            <hr />
            <a className="dropap" href="/home#home">HOME</a>
            <hr />
            <a className="dropap" href="/home#about">ABOUT</a>
            <hr />
            <a className="dropap" href="/home#testimonials">TESTIMONIALS</a>
            <hr />
            <a className="dropap" href="/home#contact">CONTACT</a>
            <hr />
          </div>
          <div className="prj">
            {this.state.projectsList.map(this.createProject)}
          </div>
        </div>
      </Route>
      <Route path="/singleproject/:id">
        {this.createSingleProject}
      </Route>
      <Route path="/authenticate">
        <Authenticate onChangeUser={this.onChangeUser} onChangePwd={this.onChangePwd} submitClick={this.submitClick}/>
      </Route>
      <Route path="/compose">
        <Compose authenticate={this.state.authenticate}/>
      </Route>
      <Route path="/">
        <Title />
        <About />
        <Testimonials />
        <Contact />
      </Route>
    </Switch>
  );
}
}

export default App;
