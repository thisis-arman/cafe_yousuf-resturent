import {Swiper, SwiperSlide,} from "swiper/react";
// import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import 'swiper/css';
import slider1 from '../../../../assets/home/slide1.jpg'
import slider2 from '../../../../assets/home/slide2.jpg'
import slider3 from '../../../../assets/home/slide3.jpg'
import slider4 from '../../../../assets/home/slide4.jpg'
import SectionTitle from "../../../Shared/SectionTitle";


const Category = () => {
    return (
        <div>
          <section>
            <SectionTitle subHeading={'From 9am to 10pm'} heading={'order Online'}></SectionTitle>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-16"
      >
        <SwiperSlide className="rounded-xl">
            <img className="rounded" src={slider1} alt="" />
           <h2 className="md:text-4xl text-white text-center -mt-16">Salads</h2>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl">
            <img className="rounded" src={slider2} alt="" />
           <h2 className="md:text-4xl text-white text-center -mt-16">Pizzas</h2>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl">
            <img className="rounded" src={slider3} alt="" />
           <h2 className="md:text-4xl text-white text-center -mt-16">Soups</h2>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl">
            <img className="rounded" src={slider4} alt="" />
           <h2 className="md:text-4xl text-white text-center -mt-16">Desserts</h2>
        </SwiperSlide>
        
        <SwiperSlide className="rounded-xl">
            <img className="rounded" src={slider1} alt="" />
           <h2 className="md:text-4xl text-white text-center -mt-16">Salads</h2>
        </SwiperSlide>
       
      </Swiper>
          </section>
            
        </div>
    );
};

export default Category;