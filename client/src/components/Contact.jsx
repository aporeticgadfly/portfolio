//some email thing here

import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', msg: ''};
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMsg = this.onChangeMsg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(event, e) {
    this.setState({email: event.target.value});
  }

  onChangeMsg(event, e) {
    this.setState({msg: event.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    var formData = {
      email: this.state.email,
      msg: this.state.msg
    };

    const transport = axios.create({
      withCredentials: true,
      headers : {
        "Access-Control-Allow-Origin": "http://localhost:5000"
      }
    });

    transport.post('http://localhost:5002/home', formData).then(res => {console.log(res.data)}).catch(err => console.log(err));
    /*window.location.href = "http://localhost:3000/compose";*/
  }

  componentDidMount() {
    document.querySelector(".contact").onmouseover = function() {document.querySelector(".cntctbtn").style.color = "#8A8D8F";};
    document.querySelector(".contact").onmouseout = function() {document.querySelector(".cntctbtn").style.color = "white";};
  }
  render() {
    return (
    <div className="contact">
      <a className="none" href="/home#contact" id="contact">text</a>
      <h1 className="contactheader header">Contact</h1>
      <hr />
          <div className="container main__container">
            <section className="main__content" data-aos="fade-up" data-aos-duration="3000">
              <h1 className="main__title">Need a website coded?</h1>
              <p className="main__text">
                I'm currently available for freelance work. Send me a message to enlist my services, and I'll get back to you within 1-3 days.
              </p>
            </section>
            <section className="form" action="#" data-aos="fade-down" data-aos-duration="3000">
              <div className="form__item in">
                <input className="form__input" type="email" name="email" id="email" placeholder="Email Address" onChange={this.onChangeEmail}/>
                <span className="formerr">Looks like this is not an email</span>
              </div>
              <div className="form__item ta">
                <textarea className="form__input" id="msg" rows="6" columns="100" placeholder="Write Message Here..." onChange={this.onChangeMsg}/>
              </div>
              <button className="button button--style--green" type="submit" onClick={this.onSubmit}>Contact Me</button>
              <p className="form__text">Your email will not be shared with anyone else nor spammed.</p>
            </section>
          </div>
          <div className="footer">
            <footer> &copy; 2020 Santiago Orellana. All Rights Reserved.</footer>
          </div>
      </div>
    );
  }
}
export default Contact;
