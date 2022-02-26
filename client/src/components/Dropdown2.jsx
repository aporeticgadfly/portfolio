import React from "react";

class Dropdown2 extends React.Component {

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
      <div>
        <div className="dropdownp">
          <button className="dropbtnp"><i className="fas fa-bars"></i></button>
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
      </div>
    )
  }
}

export default Dropdown2;
