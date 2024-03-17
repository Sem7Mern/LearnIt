import React from 'react'
import "./Home1.css";
export default function Home1() {
  return (
    <div className='header'>
      <section className="home" id="home">
        <div className="content">
          <h5>Explore new Learning horizons</h5>
          <p>"Empowering slow learners with personalized, effective, and supportive learning solutions to unlock their full potential."</p>
          <a href="#about"><button className="btn">About Us</button></a>
        </div>
      </section>

      <section className="about" id="about">
        <h1 className="heading">About Us</h1>
        <div className="row">
          <div className="image">
            <img src="images/about-img.jpg" alt="" />
          </div>
        </div>
        <div className="content">
          <p>
            Welcome to LearnIt where every learner's journey matters. We're dedicated to empowering slow learners with personalized learning paths, adaptive resources, and a supportive community. Our mission is simple: to provide an inclusive environment where everyone can thrive at their own pace.
          </p>
          <p>
            That's why we offer evidence-based teaching strategies and interactive technologies to make learning engaging and accessible for all. Whether you're struggling with a specific subject or need extra time to grasp concepts, we're here to support you every step of the way. Join us on this journey of learning, growth, and empowerment.
          </p>
          <p>
            Together, let's transform obstacles into opportunities and pave the way for a brighter future.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>LeafNow</h4>
              <ul>
                <li><a href="#about">about us</a></li>
                <li><a href="#project">Our Projects</a></li>
                <li><a href="seedlink.html">SeedLink</a></li>
                <li><a href="#">privacy policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li><a href="#">Buy Plants</a></li>
                <li><a href="#">Sell Plants</a></li>
                <li><a href="#">Donate Plants</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a target="_blank" href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a target="_blank" href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                <a target="_blank" href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                <a target="_blank" href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
