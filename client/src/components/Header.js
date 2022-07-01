import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
export default function Header() {
  return (
    <div className="header">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="header__text">
            <div className="header__text-container">
              <h1>From its medieval origins to the digital era</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter The passage experienced a
                surge in popularity during the 1960s when Letraset used it on
                their dry-transfer sheets, and again during the 90s as desktop
                publishers bundled
              </p>
              <div className="header__action">
                <button>
                  <i className="fa-solid fa-hand-holding-heart"></i> Donate
                </button>
                <button>Review</button>
              </div>
            </div>
          </div>
          <div className="header__images">
            <img src="/images/header/qurban.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header__text">
            <div className="header__text-container">
              <h1>From its medieval origins to the digital era</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter The passage experienced a
                surge in popularity during the 1960s when Letraset used it on
                their dry-transfer sheets, and again during the 90s as desktop
                publishers bundled
              </p>
              <div className="header__action">
                <button>
                  {" "}
                  <i className="fa-solid fa-hand-holding-heart"></i> Donate
                </button>
                <button>Review</button>
              </div>
            </div>
          </div>
          <div className="header__images">
            <img src="/images/header/qurban.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header__text">
            <div className="header__text-container">
              <h1>From its medieval origins to the digital era</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter The passage experienced a
                surge in popularity during the 1960s when Letraset used it on
                their dry-transfer sheets, and again during the 90s as desktop
                publishers bundled
              </p>
              <div className="header__action">
                <button>
                  {" "}
                  <i className="fa-solid fa-hand-holding-heart"></i> Donate
                </button>
                <button>Review</button>
              </div>
            </div>
          </div>
          <div className="header__images">
            <img src="/images/header/qurban.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
