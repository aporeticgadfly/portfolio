import React from 'react';
import axios from 'axios';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: {backgroundImage: null, backgroundSize: "cover"}, name: "", link: ""};
  }

  componentDidMount() {

    document.querySelector(".titleDiv").onmouseover = function() {document.querySelector(".hmbtn").style.color = "#5eb3ce";};
    document.querySelector(".titleDiv").onmouseout = function() {document.querySelector(".hmbtn").style.color = "white";};

    const transport1 = axios.create({
      withCredentials: true
    });

    transport1.get('http://'+window.location.hostname+':3000/unsplash')
      .then(res => {

          this.setState({
            image:
              {backgroundImage: "url(" + res.data.image + ")", backgroundSize:"cover"},
            name: res.data.name,
            link: res.data.link
          });

        })
      .catch(err => {
        console.log(err);
      });

      if(this.state.image.backgroundImage === null) {
        this.setState({
          image:
            {backgroundImage: "url(background.jpg)", backgroundSize:"cover"},
          name: 'Alessandro Sachi',
          link: 'https://unsplash.com'
        });
      }

  }
  render() {
    return (
      <div style={this.state.image} className = "titleDiv full">
        <a className="none" href="/home#home" id="home">text</a>

        <div className="titleWrapper">
          <h1 className ="titletext" id="name">Santiago Orellana</h1>
          <h3 className = "titletext">Full-Stack Web Developer</h3>
          <a href="/projects"><button className="titlebtn">View Portfolio</button></a>
          <p className="titletext attribution">Photo by <a href={this.state.link}>{this.state.name}</a> on <a href="https://unsplash.com/">Unsplash</a></p>
        </div>
      </div>
    );
  }
}
export default Title;
