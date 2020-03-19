//front image
//Title
//truncated description

import React from 'react';
class Proj extends React.Component {

  componentDidMount() {
    var count = 0;
    document.querySelector(".dropdownp").addEventListener("click", function () {
      if(count === 0) {
        document.querySelector(".dropdown-contentp").classList.add("reveal");
        count = 1;
      }
      else if (count === 1) {
        document.querySelector(".dropdown-contentp").classList.remove("reveal");
        count = 0;
      }
    });
  }

  render() {
    return (
      <div onClick={(e) => this.props.projectClick(this.props.id, e)}>
        <img alt=""className="prjimg" src={this.props.image}/>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
export default Proj;
