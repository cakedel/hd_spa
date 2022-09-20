import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/Main.scss'

const SLIDE = [
    { id: 1, content: "The world expands along the new path created by Hyundai Elevator", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "/sub01", title: "The world expands" },
    { id: 2, content: "현대엘리베이터 스마트 테크놀로지 체험", desc: "2021 한국국제승강기엑스포 VR투어", link: "/sub02", title: "along the new path" },
    { id: 3, content: "The No.1 for 14 years, we continue to make history of elevators in Korea", desc: "14년 연속 1위로 대한민국 엘리베이터의 역사를 만들어 갑니다.", link: "/sub03", title: "Hyundai Elevator" }
]

const Main = () => {
    const [on, setOn] = useState(0);
    const MSG = useRef(null);
    return (
        <section className='Main'>
            <Swiper
                loop={true}
                onSlideChange={slide => setOn(slide.realIndex)}
                className='mainSlider'
                ref={MSG}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <SwiperSlide key={slide.id} className={`slide itm0${slide.id} ${on === idx && 'on'}`}>
                                <div className="content">
                                    <h2>{slide.title}</h2>
                                    <strong>{slide.content}</strong>
                                    <p>{slide.desc}</p>
                                    <Link to={slide.link} className="clickBtn">VIEW MORE</Link>
                                </div>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
            <ul className='dots'>
                {
                    SLIDE.map((dots, idx) => {
                        return (
                            <li key={idx}
                                className={idx === on && 'on'}
                                onClick={() => MSG.swiper.slideTo(idx)}
                            >{dots.id}</li>
                        )
                    })
                }
            </ul>
            <div className="tab">
                {SLIDE[on].title}
            </div>
            <div className="slideNum">
                0{on + 1} / 0{SLIDE.length}
            </div>
            <button onClick={() => MSG.current.swiper.slidePrev()}>Prev</button>
            <button onClick={() => MSG.current.swiper.slideNext()}>Next</button>
        </section>
    )
}

export default Main;