import React from 'react';
import Slider from 'react-slick';
import image1 from '../../assets/images/new_york.jpg';
import image2 from '../../assets/images/image-2.jpg';
import image3 from '../../assets/images/image-3.jpg';

const SliderMain = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className='px-3'>
    <Slider {...settings}>
        <div>
            <div id="slide1" className="carousel-item relative w-full">
                  <img src={image1} alt="" className="w-full lg:h-96 h-48" />
                  <div className="text-3xl text-white absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-[70%]">
                      <h1>আমাদের নিউজ পোর্টালে আপনাকে স্বাগতম</h1>
                  </div>
              </div> 
        </div>
      <div>
      <div id="slide1" className="carousel-item relative w-full">
                  <img src={image1} alt="" className="w-full lg:h-96 h-48" />
                  <div className="text-3xl text-white absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-[70%]">
                      <h1>আমাদের নিউজ পোর্টালে আপনাকে স্বাগতম</h1>
                  </div>
              </div>
      </div>
      <div>
      <div id="slide1" className="carousel-item relative w-full">
                  <img src={image2} alt="" className="w-full lg:h-96 h-48" />
                  <div className="text-3xl text-white absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-[70%]">
                      <h1>আমাদের নিউজ পোর্টালে আপনাকে স্বাগতম</h1>
                  </div>
              </div>
      </div>
      <div>
      <div id="slide1" className="carousel-item relative w-full">
                  <img src={image3} alt="" className="w-full lg:h-96 h-48" />
                  <div className="text-3xl text-white absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-[70%]">
                      <h1>আমাদের নিউজ পোর্টালে আপনাকে স্বাগতম</h1>
                  </div>
              </div>
      </div>
      
    </Slider>
  </div>
  );
};

export default SliderMain;