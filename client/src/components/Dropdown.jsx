import React from "react";

class Dropdown extends React.Component {

  componentDidMount() {
    var count = 0;
    document.querySelector(".dropdown").addEventListener("click", function () {
      if(count === 0) {
        document.querySelector(".dropdown-content").classList.add("reveala");
        count = 1;
      }
      else if (count === 1) {
        document.querySelector(".dropdown-content").classList.remove("reveala");
        count = 0;
      }
    });
  }
  render() {
    return (
      <div className="dropdown">
        <button className="dropbtn"><i className="fas fa-bars"></i></button>
        <div className="dropdown-content">
          <hr />
          <a className="dropa" href="#home">Home</a>
          <hr />
          <a className="dropa" href="#about">About</a>
          <hr />
          <a className="dropa" href="#testimonials">Testimonials</a>
          <hr />
          <a className="dropa" href="#contact">Contact</a>
          <hr />
          <a className="dropa" href="/projects">Portfolio</a>
        </div>
      </div>
    )
  }
}

export default Dropdown;
