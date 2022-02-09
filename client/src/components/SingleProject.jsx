import React from "react";
import axios from 'axios';

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {proj: {title: '', desc: '', link: '', imageUrls: ['']}};
    this.redirect = this.redirect.bind(this);
    window.self = this;
  }

  redirect() {
    window.location.href = "https://github.com/aptaabye";
  }

  componentDidMount() {
    axios.get('http://'+window.location.hostname+':3000'+window.location.pathname)
    .then(
      res => {
        this.setState({proj: res.data});
      }
      )
      .catch(
        err => console.log(err)
      );
    }

  render() {
    return (
      <div className="cont">
        <img className="couFlag"src={this.state.proj.imageUrls[0]} alt=""/>
        <div>
          <h2 style = {this.state.proj.textStyle}>{this.state.proj.name}</h2>
          <div className="rightDiv">
            <div>
              <h3 className="couDetails">{this.state.proj.title}</h3>
              <p className="couDetails firstp">{this.state.proj.desc}</p>
              <button className="couBtn" onClick={this.redirect}>View Code On Github</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleProject;
