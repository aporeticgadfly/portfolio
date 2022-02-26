import React from "react";

class WorkHd extends React.Component {

  constructor(props) {
    super(props);
    this.hover = this.hover.bind(this);
    this.out = this.out.bind(this);
  }

  hover(hovered) {
    hovered.childNodes[1].classList.add("show");
  }

  out() {
    const hiddens = document.querySelectorAll(".ps");
    hiddens.forEach(function(hidden) {
      hidden.classList.remove("show");
    });
  }

  render() {
    return (
      <div className="workhd" onMouseOver={(e) => this.hover(e.currentTarget)} onMouseOut={this.out}>
        <div className="hdr">
          <div>
            <h3>{this.props.jobtitle}</h3>
            <h4>{this.props.company}</h4>
          </div>
          <i className="fas fa-sort-down"></i>
        </div>
        <div className="ps">
          <p>{this.props.firstp}</p>
          <p>{this.props.secondp}</p>
          <p>{this.props.thirdp}</p>
        </div>
      </div>
    )
  }
}

export default WorkHd;
