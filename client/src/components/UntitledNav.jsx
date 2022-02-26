import React from "react";
class UntitledNav extends React.Component {

  render() {
    return (
      <nav className="flex-column">
        <a tabIndex="-1" href="#home"><button className="navbtns hmbtn" >Home</button></a>
        <a tabIndex="-1" href="#about"><button className="navbtns abtbtn" >About</button></a>
        <a tabIndex="-1" href="#testimonials"><button className="navbtns tstbtn" >Testimonials</button></a>
        <a tabIndex="-1" href="#contact"><button className="navbtns cntctbtn" >Contact</button></a>
        <a tabIndex="-1" href="/projects"><button className="navbtns prtbtn" >Portfolio</button></a>
      </nav>
    )
  }
}

export default UntitledNav;
