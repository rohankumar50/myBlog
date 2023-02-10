import React from 'react'
import Seperator from '../seperator/Seperator'
import './main.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


function Main() {
    return (
        <div className='main'>
            <div className="main_body">
                <div className="main_featured">
                    <div className="main_featured_left"></div>
                    <div className="main_featured_right"></div>
                </div>
                <Seperator />
                <div className="main_latest">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="slider"
                    >
                        <SwiperSlide className='slide'>Slide 1</SwiperSlide>
                        <SwiperSlide className='slide'>Slide 2</SwiperSlide>
                        <SwiperSlide className='slide'>Slide 3</SwiperSlide>
                        <SwiperSlide className='slide'>Slide 4</SwiperSlide>
                        <SwiperSlide className='slide'>Slide 4</SwiperSlide>
                        <SwiperSlide className='slide'>Slide 4</SwiperSlide>
                        <SwiperSlide className='slide'>Slide 4</SwiperSlide>
                        <SwiperSlide className='slide'>Slide 4</SwiperSlide>

                    </Swiper>
                </div>
                <Seperator />

            </div>
        </div>
    )
}

export default Main
