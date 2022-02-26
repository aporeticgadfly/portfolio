import React from 'react';
import Footer from './Footer';
import EmailMessage from './EmailMessage';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', msg: '', show: false, render: 2, errWidth: {width: "34vw"}};
  }

  componentDidMount() {
    document.querySelector(".contact").onmouseover = function() {document.querySelector(".cntctbtn").style.color = "#5eb3ce";};
    document.querySelector(".contact").onmouseout = function() {document.querySelector(".cntctbtn").style.color = "white";};
  }
  render() {
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
        <EmailMessage />
      </div>
      <Footer />
    </div>
    );
  }
}
export default Contact;
