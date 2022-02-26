import React from 'react';
import Glider from "../glider.js"

class Testimonials extends React.Component {

  componentDidMount() {
    document.querySelector(".testimonials").onmouseover = function() {document.querySelector(".tstbtn").style.color = "#5eb3ce";};
    document.querySelector(".testimonials").onmouseout = function() {document.querySelector(".tstbtn").style.color = "white";};

    window.addEventListener('load', function(){
      new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        arrows: {
         prev: '.glider-prev',
         next: '.glider-next'
       },
       dots: '.dots',
       scrollLock: true
      })
    });
  }
  render() {

    return (
    <div className = "testimonials full">
      <a tabIndex="-1" className="none" href="/home#testimonials" id="testimonials">text</a>
      <h1 className = "header testimonialsheader">Testimonials</h1>
      <hr />
        <div className="glider-contain">
        <div className="glider">
          <div className="glider-item">
            <img
              className="d-block w-100"
              src={require("../images/nietzsche.jpg")}
              alt="First slide"
              data-aos="fade-right"
              data-aos-duration="3000"
            />
            <div className="glidertext" data-aos="fade-left" data-aos-duration="3000">
              <h1>Friedrich Nietzsche</h1>
              <p>
                Friedrich Wilhelm Nietzsche was a German philosopher, cultural critic, composer, poet, philologist, and scholar of Latin and Greek whose work has exerted a profound influence on modern intellectual history.
              </p>
              <p>
                View their website at:
              </p>
            </div>
          </div>
          <div className="glider-item">
            <img
              className="d-block w-100"
              src={require("../images/kierkegaard.jpg")}
              alt="Second slide"
            />
            <div className="glidertext">
              <h1>Soren Kierkegaard</h1>
              <p>
                Søren Aabye Kierkegaard was a Danish philosopher, theologian, poet, social critic and religious author who is widely considered to be the first existentialist philosopher.
              </p>
              <p>
                View their website at:
              </p>
            </div>
          </div>
          <div className="glider-item">
            <img
              className="d-block w-100"
              src={require("../images/kant.jpg")}
              alt="Third slide"
            />
            <div className="glidertext">
              <h1>Immanuel Kant</h1>
              <p>
                Immanuel Kant was an influential Prussian German philosopher in the Age of Enlightenment. In his doctrine of transcendental idealism, he argued that space, time, and causation are mere sensibilities; "things-in-themselves" exist, but their nature is unknowable.
              </p>
              <p>
                View their website at:
              </p>
            </div>
          </div>
        </div>
        <button aria-label="Previous" className="glidebtn glider-prev">«</button>
        <button aria-label="Next" className="glidebtn glider-next">»</button>
        <div role="tablist" className="dots"></div>
      </div>
    </div>
    );
  }
}
export default Testimonials;
