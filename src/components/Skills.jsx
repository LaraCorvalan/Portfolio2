import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import s from '../estilos/Skills.module.css'

export default function Skills() {
    return (
        <div style={{paddingTop:'40px'}}>
            <div className={s.superSwiper}>
                <div className={s.titulo}>
                    <p className={s.title}>MY SKILLS</p>
                </div>
                <div className={s.swiperContainer}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className={s.swiper}
                    >
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '100px', marginLeft: '60px' }} src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '100px', marginLeft: '50px' }} src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '100px', marginLeft: '50px' }} src="https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '100px', marginLeft: '50px' }} src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '100px', marginLeft: '50px' }} src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '150px', marginLeft: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '230px', marginLeft: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '100px', marginLeft: '70px' }} src="https://assets.stickpng.com/images/58482ee4cef1014c0b5e4a75.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '100px', marginLeft: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '150px', marginLeft: '40px' }} src="https://miro.medium.com/max/1400/1*ZSIihImW6DeVOYwUL-ghfQ.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '100px', marginLeft: '50px' }} src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className={s.superSwiper}>
                <div className={s.titulo}>
                    <p className={s.title}>CURRENTLY LEARNING</p>
                </div>
                <div className={s.swiperContainer}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className={s.swiper}
                    >
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '100px' }} src="https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '150px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/2560px-Django_logo.svg.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '100px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={s.swiperContent}>
                            <img style={{ width: '100px' }} src="https://seeklogo.com/images/R/react-native-logo-221C671C70-seeklogo.com.png" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    )
}