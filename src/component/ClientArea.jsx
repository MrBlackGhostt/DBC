// Import Swiper styles
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ss } from "../JSON/element";

import "../App.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import slide_image_1 from "../asset/image/1.jpg";
// import slide_image_2 from "../asset/image/2.jpg";
// import slide_image_3 from "./asset/images/3.jpg";
// import slide_image_4 from "./asset/images/4.jpg";
// import slide_image_5 from "./asset/images/5.jpg";
// import slide_image_6 from "./asset/images/6.jpg";
// import slide_image_7 from "./asset/images/7.jpg";

const ClientArea = () => {
  return (
    <>
      <div className="container w-60">
        <h1 className="heading">Flowe Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {ss.map((item) => {
            return (
              <SwiperSlide style={{ width: "40%" }}>
                <div class="card" style={{ width: "100%" }}>
                  <img
                    src={item.url}
                    class="card-img-top "
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <i class="fa-solid fa-star fa-sm"></i>

                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>

                  <div class="card-body">
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>

            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default ClientArea;
