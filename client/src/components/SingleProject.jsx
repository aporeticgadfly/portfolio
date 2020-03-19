import React from "react";

class SingleProject extends React.Component {

  render() {
    return (<div className="cont">
      <img className="couFlag"src={this.props.images[0]} alt=""/>
      <div>
        <h2 style = {this.props.textStyle}>{this.props.name}</h2>
        <div className="rightDiv">
          <div>
            <p className="couDetails">{this.props.title}</p>
            <p className="couDetails">{this.props.description}</p>
            <p className="couDetails">View Code At: <a href={this.props.link}>{this.props.link}</a></p>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default SingleProject;
