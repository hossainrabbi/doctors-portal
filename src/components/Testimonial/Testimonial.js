import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { testimonial } from '../../data/testimonial';
import TestimonialCard from './TestimonialCard';
import '../../styles/testimonial.css';

const Testimonial = () => {
    return (
        <section className="container mt-100">
            <div className="title">
                <h6>Testimonial</h6>
                <h2>Services We Provide</h2>
            </div>
            <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
                {testimonial.map((data) => (
                    <SwiperSlide key={data.id}>
                        <TestimonialCard {...data} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonial;
