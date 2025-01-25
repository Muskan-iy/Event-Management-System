import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Fontlibrary';

const Footer = () => {
  return (
    
    <section className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <h3>branches</h3>
          <a className="icon-link icon-link-hover" href="#">
            <FontAwesomeIcon icon="location-dot" /> Islamabad
          </a>
          <a className="icon-link icon-link-hover" href="#">
            <FontAwesomeIcon icon="location-dot" /> Peshawar
          </a>
          <a className="icon-link icon-link-hover" href="#">
            <FontAwesomeIcon icon="location-dot" /> Quetta
          </a>
          <a className="icon-link icon-link-hover" href="#">
            <FontAwesomeIcon icon="location-dot" /> Karachi
          </a>
          <a className="icon-link icon-link-hover" href="#">
            <FontAwesomeIcon icon="location-dot" /> Lahore
          </a>
        </div>

        <div className="box">
      <h3>quick links</h3>
      <a className="icon-link icon-link-hover" href="#home">
        <FontAwesomeIcon icon={faArrowRight} /> home
      </a>
      <a className="icon-link icon-link-hover" href="#service">
        <FontAwesomeIcon icon={faArrowRight} /> service
      </a>
      <a className="icon-link icon-link-hover" href="#review">
        <FontAwesomeIcon icon={faArrowRight} /> review
      </a>
      <a className="icon-link icon-link-hover" href="#price">
        <FontAwesomeIcon icon={faArrowRight} /> price
      </a>
      <a className="icon-link icon-link-hover" href="#contact">
        <FontAwesomeIcon icon={faArrowRight} /> contact us
      </a>
      <a className="icon-link icon-link-hover" href="#home">
        <FontAwesomeIcon icon={faArrowRight} /> gallery
      </a>
      <a className="icon-link icon-link-hover" href="#about">
        <FontAwesomeIcon icon={faArrowRight} /> about
      </a>
    </div>

    <div className="box">
      <h3>contact info</h3>
      <a className="icon-link icon-link-hover" href="add uour whatsapp chat link here">
        <FontAwesomeIcon icon={faPhone} /> +0123456789
      </a>
      <a className="icon-link icon-link-hover" href="add you contact chat link here">
        <FontAwesomeIcon icon={faPhone} /> +0123456789
      </a>
      <a className="icon-link icon-link-hover" href="add your email link here">
        <FontAwesomeIcon icon={faEnvelope} /> yourname@gmail.com
      </a>
      <a className="icon-link icon-link-hover" href="add your work email link here">
        <FontAwesomeIcon icon={faEnvelope} /> yourname@yahoo.com
      </a>
      <a className="icon-link icon-link-hover" href="#">
        <FontAwesomeIcon icon={faLocationDot} /> Islamabad
        <svg className="bi" aria-hidden="true"><use xlinkHref="#arrow-right"></use></svg>
      </a>
    </div>

    <div className="box">
      <h3>follow us</h3>
      <a className="icon-link icon-link-hover" href="add your facebook link here">
        <FontAwesomeIcon icon={faFacebookF} /> facebook
      </a>
      <a className="icon-link icon-link-hover" href="add your twitter link here">
        <FontAwesomeIcon icon={faTwitter} /> twitter
      </a>
      <a className="icon-link icon-link-hover" href="add your instagram link here">
        <FontAwesomeIcon icon={faInstagram} /> instagram
      </a>
      <a className="icon-link icon-link-hover" href="add your linkedin link here">
        <FontAwesomeIcon icon={faLinkedinIn} /> linkedin
      </a>
    </div>
      </div>
    </section>
  );
}

export default Footer;
