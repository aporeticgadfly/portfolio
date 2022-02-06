import React from "react";

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    window.location.href = "https://github.com/aptaabye";
  }

  render() {
    return (
    <div className="cont">
      <img className="couFlag"src={this.props.images[0]} alt=""/>
      <div>
        <h2 style = {this.props.textStyle}>{this.props.name}</h2>
        <div className="rightDiv">
          <div>
            <h3 className="couDetails">{this.props.title}</h3>
            <p className="couDetails firstp">{this.props.description}</p>
            <button className="couBtn" onClick={this.redirect}>View Code On Github</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default SingleProject;
