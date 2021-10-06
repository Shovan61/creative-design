import React, { useState } from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { cardInfo } from './utilities';
import mp4 from './images/about-us-video.mp4';
import PriceCard from './PriceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    MdPhoneAndroid,
    MdOutlineEmail,
    MdOutlineLocationOn,
} from 'react-icons/md';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import './App.css';

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

function App() {
    const [state, setstate] = useState({
        isNavOpen: false,
        isPlaying: false,
    });

    const handleNavOpen = () => {
        setstate((prev) => {
            return { ...prev, isNavOpen: true };
        });
    };

    const handleNavClose = () => {
        setstate((prev) => {
            return { ...prev, isNavOpen: false };
        });
    };

    const handlePlay = () => {
        setstate((prev) => {
            return { ...prev, isPlaying: true };
        });

        let video = document.querySelector('video');
        video.play();

        let bar = document.querySelector('.video-bar');
        video.addEventListener('timeupdate', () => {
            const barWidth = video.currentTime / video.duration;
            bar.style.width = `${barWidth * 100}%`;
            if (video.currentTime === video.duration) {
                handlePause();
            }
        });
    };
    const handlePause = () => {
        setstate((prev) => {
            return { ...prev, isPlaying: false };
        });

        let video = document.querySelector('video');
        video.pause();
    };

    return (
        <div className='root'>
            {/* Section Nav */}
            <div className='nav'>
                <div className='logo'>
                    <HiOutlineLightBulb />
                    <span>Creative Agency</span>
                </div>
                <div className='menu'>
                    <AiOutlineMenu onClick={handleNavOpen} />
                </div>
            </div>

            {/* nav links */}
            <div className={`nav-links ${state.isNavOpen ? 'show' : ''}`}>
                <MdKeyboardArrowUp
                    className='arrow-icon'
                    onClick={handleNavClose}
                />
                <a href='#home' onClick={handleNavClose}>
                    Home
                </a>
                <a href='#about' onClick={handleNavClose}>
                    About
                </a>
                <a href='#pricing' onClick={handleNavClose}>
                    Pricing
                </a>
                <a href='#contact' onClick={handleNavClose}>
                    Contact
                </a>
                <a href=''>Blog</a>
            </div>

            {/* Section hero */}
            <div className='hero-container' id='home'>
                <div className='hero'>
                    <div className='header-container'>
                        <h1 className='header header-1'>e-commerce solution</h1>
                        <h1 className='header header-2'>digital marketing</h1>
                        <h1 className='header header-3'>web development</h1>
                        <h1 className='header header-4'>app development</h1>
                    </div>

                    <div className='hero-description'>
                        <p>
                            Try out the best service to maintain your
                            sustainable business. Our service will help your
                            business with all the assistance to thrive in this
                            competetive market.
                        </p>
                    </div>
                </div>

                <div className='button-hero'>Discover Now</div>
            </div>

            {/* Section About */}
            <div className='section-about' id='about'>
                <div className='content'>
                    <div className='about-header'>
                        <h1>About</h1>
                        <div className='about-line'></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati explicabo nostrum cumque? Culpa nesciunt,
                        dicta praesentium accusantium laboriosam nemo ut modi
                        aliquid nam tempore hic molestias voluptatum aut iusto
                        cumque voluptate deserunt iste suscipit dolorem. Impedit
                        beatae dolor amet sit eligendi mollitia commodi iusto
                        molestias aspernatur suscipit! Expedita qui ex earum
                        assumenda nesciunt dignissimos? Quisquam totam tenetur
                        quidem ipsa voluptatibus?
                    </p>
                </div>
                <div className='video-wrapper'>
                    <div className='video'>
                        <video
                            style={{ opacity: state.isPlaying ? '1' : ' 0.5' }}
                            src={mp4}></video>
                    </div>
                    <div className='controls'>
                        {state.isPlaying ? (
                            <AiOutlinePauseCircle
                                className='control-btn'
                                onClick={handlePause}
                            />
                        ) : (
                            <AiOutlinePlayCircle
                                className='control-btn'
                                onClick={handlePlay}
                            />
                        )}

                        <div className='video-bar-wrapper'>
                            <div className='video-bar'></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section Pricing */}
            <div className='section-pricing' id='pricing'>
                <div className='pricing-left'>
                    <h1>Pricing</h1>
                    <div className='pricing-line'></div>
                </div>
                <div className='pricing-right'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 50,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        className='mySwiper'>
                        {cardInfo.map((curItem) => (
                            <SwiperSlide>
                                <PriceCard key={curItem.id} {...curItem} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    ;
                </div>
            </div>
            {/* Contact */}
            <div className='section-contact' id='contact'>
                <div className='pricing-left'>
                    <h1>Contact</h1>
                    <div className='pricing-line'></div>
                </div>
                <div className='contact-right'>
                    <div className='icons-box'>
                        <div className='icon'>
                            <MdPhoneAndroid />
                            <span>(88) 015845 887</span>
                        </div>
                        <div className='icon'>
                            <MdOutlineEmail />
                            <span>support@creativeagency.com</span>
                        </div>
                        <div className='icon'>
                            <MdOutlineLocationOn />
                            <span>5 MD street, Ghost Town, United States</span>
                        </div>
                    </div>
                    <div className='form'>
                        <h1>Get In touch</h1>
                        <input type='text' placeholder='Full Name' />
                        <input type='email' placeholder='Email' />
                        <input type='text' placeholder='Your Message' />
                        <div className='button-hero'>Send</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
