import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.linkedin = this.linkedin.bind(this);
    this.github = this.github.bind(this);
  }

  linkedin() {
    window.location.href = "https://www.linkedin.com/in/santiago-orellana-67873418b/";
  }

  github() {
    window.location.href = "https://github.com/aptaabye";
  }

  render() {
    return (
      <div className="footer">
        <footer>
          <button aria-label="linkedin link" onClick={this.linkedin}>
            <i className="fab fa-linkedin"></i>
          </button>
          <button aria-label="github link" onClick={this.github}>
            <i className="fab fa-github"></i>
          </button>
          <p>&copy; 2020 Santiago Orellana. All Rights Reserved.</p>
          <p>santiago@santiagoorellana.com</p>
        </footer>
      </div>
    )
  }
}

export default Footer;
