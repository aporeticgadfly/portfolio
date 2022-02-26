import React from "react";
import axios from 'axios';
import configData from '../config.json';

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
    this.state = {proj: {title: '', desc: '', imageUrls: [], link:''}};
  }

  redirect() {
    window.location.href = this.state.proj.link;
  }

  componentDidMount() {

    this.setState({proj: {
      title: this.props.title,
      desc: this.props.description,
      imageUrls: this.props.images,
      link: this.props.link
    }});

    axios.get(configData.SERVER_URL+window.location.pathname)
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
        <h2 style = {this.props.textStyle}>{this.props.name}</h2>
        <div className="rightDiv">
          <div>
            <h3 className="couDetails">{this.state.proj.title}</h3>
            <p className="couDetails firstp">{this.state.proj.desc}</p>
            <button className="couBtn" onClick={this.redirect}>View Code On Github</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default SingleProject;
