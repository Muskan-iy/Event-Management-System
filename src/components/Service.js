import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faMusic, faPhotoVideo, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  const iconStyle = { fontSize: '3em', color:'#3867d6' };

  return (
    <div className="main">
      <section className="service" id="service">
        <h1 className="heading">Our <span>services</span></h1>
        <div className="box-container">
          <div className="box">
            <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} />
            <h3>Venue Selection</h3>
            <p>Our experts consider factors such as location, services and amenities, budget, space requirements, and ambiance to ensure that your event is a success.</p>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
            <h3>Invitation Card</h3>
            <p>Our invitation card service helps you create beautiful and personalized invitations for your event. Choose from a variety of templates and customize them to your liking.</p>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faMusic} style={iconStyle} />
            <h3>Entertainment</h3>
            <p>We strive to bring you the best entertainment experience possible, with high-quality content and excellent customer service.</p>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faPhotoVideo} style={iconStyle} />
            <h3>Photos and Videos</h3>
            <p>Our photos and videos service provides you with high-quality visual content for your personal or professional needs. Our team of experts will work with you to create stunning images and videos that capture your vision and exceed your expectations.</p>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faBirthdayCake} style={iconStyle} />
            <h3>Customisation</h3>
            <p>Customization service is a service that allows you to tailor your product or service to your specific needs. Our experts work with you to create a customized solution that meets your unique requirements.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
