import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { teams } from '../../data/teams';
import Team from './Team';
import 'swiper/swiper.scss';
import '../../styles/teams.css';

const Teams = () => {
    return (
        <section className="container mb-5">
            <div className="title mb-5">
                <h6>Our Doctors</h6>
                <h2>Doctors We Provide</h2>
            </div>
            <Swiper spaceBetween={50} slidesPerView={3}>
                {teams.map((team) => (
                    <SwiperSlide key={team.id}>
                        <Team {...team} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Teams;
