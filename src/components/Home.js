import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Mousewheel, Pagination, Scrollbar, Navigation } from "swiper";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Card from "./Card";
import CounterUP from "./CounterUP";

import "../style.css";

const Home = () => {
  return (
    <>
      <div className="slider-custom">
        <Swiper
          loop={false}
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
        >
          <SwiperSlide>
            <section className="header-text">
              <div className="header-left">
                <h2>Lorem ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd
                </p>
                <Link to="/about" className="home-btn">
                  Know More
                  <span>
                    <FiPlay />
                  </span>
                </Link>
              </div>
              <div className="haeder-right">
                <img
                  src={`/images/header-banners.png`}
                  alt="Project"
                  className="slide-image"
                />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="header-text">
              <div className="header-left">
                <h2>Lorem ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd
                </p>
                <Link to="/about" className="home-btn">
                  Know More
                  <span>
                    <FiPlay />
                  </span>
                </Link>
              </div>
              <div className="haeder-right">
                <img
                  src={`/images/header-banners.png`}
                  alt="Project"
                  className="slide-image"
                />
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
      <Card />
      <div className="slider-wrap conatiner-2">
        <Swiper
          loop={false}
          spaceBetween={30}
          slidesPerView={"auto"}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 1,
            },
            1000: {
              width: 1000,
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Scrollbar]}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="card-box custom-slider-box">
            <div className="card-header">
              <div className="card-img">
                <img
                  src={`../images/card-banner.jpg`}
                  alt="Project"
                  className="slide-image"
                />
              </div>
              <div className="card-content">
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </p>
                <Link to="/about" className="home-btn home__btn">
                  Know More
                  <span>
                    <IoIosArrowDroprightCircle />
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card-box custom-slider-box">
            <div className="card-header">
              <div className="card-img">
                <img
                  src={`../images/card-banner.jpg`}
                  alt="Project"
                  className="slide-image"
                />
              </div>
              <div className="card-content">
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </p>
                <Link to="/about" className="home-btn home__btn">
                  Know More
                  <span>
                    <IoIosArrowDroprightCircle />
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card-box custom-slider-box">
            <div className="card-header">
              <div className="card-img">
                <img
                  src={`../images/card-banner.jpg`}
                  alt="Project"
                  className="slide-image"
                />
              </div>
              <div className="card-content">
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </p>
                <Link to="/about" className="home-btn home__btn">
                  Know More
                  <span>
                    <IoIosArrowDroprightCircle />
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card-box custom-slider-box">
            <div className="card-header">
              <div className="card-img">
                <img
                  src={`../images/card-banner.jpg`}
                  alt="Project"
                  className="slide-image"
                />
              </div>
              <div className="card-content">
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </p>
                <Link to="/about" className="home-btn home__btn">
                  Know More
                  <span>
                    <IoIosArrowDroprightCircle />
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <CounterUP />
      <div className="slider-wrap conatiner-3">
        <img src={`../images/slider-3_banner.svg`} alt="slider" />
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation
            modules={[Navigation]}
            breakpoints={{
              540: {
              width: 540,
              slidesPerView: 1,
            },  
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 1,
            },
            1024: {
              width: 1024,
              slidesPerView: 1,
            },
            1300: {
              width: 1300,
              slidesPerView: 1,
            },
            1600: {
              width: 1600,
              slidesPerView: 1,
            },
            1920: {
              width: 1920,
              slidesPerView: 1,
            },
            
          }}
            className="swiper-three"
          >
            <SwiperSlide>
              <div className="testimonal-slider">
                <div>
                  <h6>January 20, 2011</h6>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                  <h6>January 20, 2011</h6>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                  <h6>January 20, 2011</h6>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonal-slider">
                <div>
                  <h6>January 20, 2011</h6>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                  <h6>January 20, 2011</h6>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                  <h6>January 20, 2011</h6>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Home;
