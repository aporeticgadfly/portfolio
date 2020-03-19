//background image of circuit board
//title with animation
//navbar, home, about, testimonials, contact, portfolio
import React from 'react';
import axios from 'axios';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: {backgroundImage: null, backgroundSize: "cover"}, name: "", link: ""};
  }

  componentDidMount() {

    document.querySelector(".titleDiv").onmouseover = function() {document.querySelector(".hmbtn").style.color = "#8A8D8F";};
    document.querySelector(".titleDiv").onmouseout = function() {document.querySelector(".hmbtn").style.color = "white";};

    var key = "uH49EAeokYsczMHAaViC0_gt9Oh_2HIHV51p18tNQJc";
    var link = 'https://api.unsplash.com/collections/9641479/photos/?client_id=' + key;

    axios.get(link)
      .then(res => {
        var rand = Math.round(Math.random() * 9);
        this.setState({
          image:
            {backgroundImage: "url(" + res.data[rand].urls.regular + ")", backgroundSize:"cover"},
          name: res.data[rand].user.name,
          link: res.data[rand].user.links.html
        });
        })
      .catch(err => console.log(err));

  }
  render() {
    return (
      <div style={this.state.image} className = "titleDiv">
        <a className="none" href="/home#home" id="home">text</a>

        <h1 className ="titletext" id="name">Santiago Orellana</h1>
        <h3 className = "titletext">Full-Stack Web Developer</h3>
        <a href="/projects"><button className="titlebtn">View Portfolio</button></a>
        <p className="titletext attribution">Photo by <a href={this.state.link}>{this.state.name}</a> on <a href="https://unsplash.com/">Unsplash</a></p>

      </div>
    );
  }
}
export default Title;
