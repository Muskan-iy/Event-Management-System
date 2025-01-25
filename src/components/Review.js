import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 2000,
  };

  return (
    <section className="review" id="review">
      <h1 className="heading">client's <span>review</span></h1>
      <div className="review-slider">
        <Slider {...settings}>
          <div className="box">
            <FontAwesomeIcon icon={faQuoteRight} />
            <div className="user">
              <img src="/asset/images/pic-1.png" alt=""/>
              <div className="user-info">
                <h3>john deo</h3>
                <span>happy clients</span>
              </div>
            </div>
            <p>I had a great experience working with this company. The staff was friendly and knowledgeable, and they were able to answer all of my questions and concerns. I would definitely recommend them to anyone looking for a great product and excellent customer service.</p>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faQuoteRight} />
            <div className="user">
              <img src="/asset/images/pic-2.png" alt=""/>
              <div className="user-info">
                <h3>jenny</h3>
                <span>happy clients</span>
              </div>
            </div>
            <p>I had a great experience working with this company. The staff was friendly and knowledgeable, and they were able to answer all of my questions and concerns. I would definitely recommend them to anyone looking for a great product and excellent customer service.</p>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faQuoteRight} />
            <div className="user">
              <img src="/asset/images/pic-3.png" alt=""/>
              <div className="user-info">
                <h3>johnny</h3>
                <span>happy clients</span>
              </div>
            </div>
            <p>I had a great experience working with this company. The staff was friendly and knowledgeable, and they were able to answer all of my questions and concerns. I would definitely recommend them to anyone looking for a great product and excellent customer service.</p>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faQuoteRight} />
            <div className="user">
              <img src="/asset/images/pic-4.png" alt=""/>
              <div className="user-info">
                <h3>jennifer</h3>
                <span>happy clients</span>
              </div>
            </div>
            <p>I had a great experience working with this company. The staff was friendly and knowledgeable, and they were able to answer all of my questions and concerns. I would definitely recommend them to anyone looking for a great product and excellent customer service.</p>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Review;
