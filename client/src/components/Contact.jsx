import React from 'react';
import axios from 'axios';
import configData from '../config.json';
import ReactModal from 'react-modal';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', msg: '', show: false, render: 2, errWidth: {width: "34vw"}};
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMsg = this.onChangeMsg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.linkedin = this.linkedin.bind(this);
    this.github = this.github.bind(this);
  }

  onChangeEmail(event, e) {
    this.setState({email: event.target.value});
  }

  linkedin() {
    window.location.href = "https://www.linkedin.com/in/santiago-orellana-67873418b/";
  }

  github() {
    window.location.href = "https://github.com/aptaabye";
  }

  onChangeMsg(event, e) {
    this.setState({msg: event.target.value});
  }

  showModal() {
     this.setState({ show: true });
  }

  closeModal() {
    this.setState({ show: false });
  }

  onSubmit(e) {
    e.preventDefault();
    var formData = {
      email: this.state.email,
      msg: this.state.msg
    };

    axios.post(configData.SERVER_URL+'/home', formData).then(res => {
      this.showModal();
      this.setState({
        render: 2
      })
    }).catch(err => {
      if(err.response.status === 401) {
        this.showModal();
        this.setState({
          render: 1,
          errWidth: {width: "53vw"}
        })
      }
      else if (err.response.status === 400) {
        this.showModal();
        this.setState({
          render: 0,
          errWidth: {width: "34vw"}
        })
      }
    });
  }

  componentDidMount() {
    document.querySelector(".contact").onmouseover = function() {document.querySelector(".cntctbtn").style.color = "#5eb3ce";};
    document.querySelector(".contact").onmouseout = function() {document.querySelector(".cntctbtn").style.color = "white";};
  }
  render() {
    let renderVar;
    if (this.state.render === 0) {
      renderVar = <div className="isa_error" style={this.state.errWidth}>
                    <button className="modalBtn" onClick={this.closeModal}><i className="fas fa-times"></i></button>
                    <i className="fa fa-times-circle"></i>
                    Please enter a valid email address.
                  </div>;
    }
    else if (this.state.render === 1) {
      renderVar = <div className="isa_error" style={this.state.errWidth}>
                    <button className="modalBtn" onClick={this.closeModal}><i className="fas fa-times"></i></button>
                    <i className="fa fa-times-circle"></i>
                    There was an error processing your message. Please email directly at santiago@santiagoorellana.com.
                  </div>;
    }
    else if (this.state.render === 2) {
      renderVar = <div className="isa_success">
                    <button className="modalBtn" onClick={this.closeModal}><i className="fas fa-times"></i></button>
                    <i className="fa fa-check"></i>
                    Success! Your message has been received.
                  </div>;
    }
    return (
    <div className="contact full">
      <a className="none" href="/home#contact" id="contact">text</a>
      <h1 className="contactheader header">Contact</h1>
      <hr />
          <div className="container main__container">
            <section className="main__content" data-aos="fade-up" data-aos-duration="3000">
              <h1 className="main__title coloured">Need a website coded?</h1>
              <p className="main__text">
                I'm currently available for freelance work. Send me a message to enlist my services, and I'll get back to you within 1-3 days.
              </p>
            </section>
            <section className="form" action="#" data-aos="fade-down" data-aos-duration="3000">
              <div className="form__item in">
                <input className="form__input" type="email" name="email" id="email" placeholder="Email Address" onChange={this.onChangeEmail}/>
                <ReactModal
                  isOpen={this.state.show}
                  ariaHideApp={false}
                  id={"modal"}
                >
                  {renderVar}
                </ReactModal>
              </div>
              <div className="form__item ta">
                <textarea className="form__input" id="msg" rows="6" columns="100" placeholder="Write Message Here..." onChange={this.onChangeMsg}/>
              </div>
              <button className="button button--style--green" type="submit" onClick={this.onSubmit}>Contact Me</button>
              <p className="form__text">Your email will not be shared with anyone else nor spammed.</p>
            </section>
          </div>
          <div className="footer">
            <footer>
              <button onClick={this.linkedin}>
                <i className="fab fa-linkedin"></i>
              </button>
              <button onClick={this.github}>
                <i className="fab fa-github"></i>
              </button>
              <p>&copy; 2020 Santiago Orellana. All Rights Reserved.</p>
              <p>santiago@santiagoorellana.com</p>
            </footer>
          </div>
      </div>
    );
  }
}
export default Contact;
