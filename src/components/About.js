import React from 'react';
import aboutImage from '../about-img.jpg';

const About = () => {
  return (
    <div className="main">
      <section className="about" id="about">
        <h1 className="heading"><span>About</span> Us </h1>
        <div className="row">
        <div className="image">
            <img src={aboutImage} alt="About Us" />
          </div>
          <div className="content">
            <h3>We Create Unforgettable Experiences</h3>
            <p>
              Welcome to our event planning service, where we are committed to crafting memorable experiences that connect and inspire people. With decades of industry expertise, our dedicated team ensures unparalleled service excellence. From venue selection and invitation design to entertainment, photography, and customization, we offer a comprehensive range of services. Let us bring your vision to life and exceed your expectations.
            </p>
            <p>Contact us today to start planning your next extraordinary event!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
