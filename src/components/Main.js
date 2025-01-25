import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
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
    <section className="home" id="home">
      <div className="content">
        <h3>It's time to celebrate! The best <span>event organizers</span></h3>
        <a href="enter the link for your whatsapp contact" className="btn contact-btn">Contact Us</a>
      </div>

      <div className='slider-container'>
        <Slider {...settings}>
          <div>
            <img src="/asset/images/d-1.jpg" alt="Decor 1" />
          </div>
          <div>
            <img src="/asset/images/decor-2.jpg" alt="Decor 2" />
          </div>
          <div>
            <img src="/asset/images/decor-3.jpg" alt="Decor 3" />
          </div>
          <div>
            <img src="/asset/images/decor-4.jpg" alt="Decor 4" />
          </div>
          <div>
            <img src="/asset/images/decor-5.jpg" alt="Decor 5" />
          </div>
          <div>
            <img src="/asset/images/decor-6.jpg" alt="Decor 6" />
          </div>
          <div>
            <img src="/asset/images/decor-7.jpg" alt="Decor 7" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Main;
