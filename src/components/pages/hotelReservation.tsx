import React from 'react';
import { useLocation } from "react-router-dom";

// css
import '../css/pages.css'

// skilsIcon
import phpIcon from '../svg/php.svg';
import laravelIcon from '../svg/laravel.svg';
import mySqlIcon from '../svg/mysql.svg';
import dockerIcon from '../svg/docker.svg';

// appImage
import hotelImg1 from '../img/hotelReservationImage1.png';
import hotelImg2 from '../img/hotelReservationImage2.png';
import hotelImg3 from '../img/hotelReservationImage3.png';

const HotelReservation: React.FC = () => {

    const location = useLocation();
    const appName = location.state.appName;

    return(
        <div className='app'>
            <div className='appProfile'>
                <p className='appName'>{appName}</p>

                <p className='appUrl'>-URL-</p>
                <p>not deployed...</p>
                <a href='https://github.com/MuRaKaMi5253161/hotelReservation' target='_blank' rel='noopener noreferrer' className='applink'>repository</a>

                <div>
                    <p className='appskil'>-skil-</p>
                    <span><img className='skilIcons' src={phpIcon} alt='skilIcon' /></span>
                    <span><img className='skilIcons' src={laravelIcon} alt='skilIcon' /></span>
                    <span><img className='skilIcons' src={mySqlIcon} alt='skilIcon' /></span>
                    <span><img className='skilIcons' src={dockerIcon} alt='skilIcon' /></span>
                </div> 

                <div className='appImage'>
                    <p className='appImageText'>-Image-</p>
                    <div>
                        <img className='appImageItems' src={hotelImg1}  alt="appImage" />
                    </div>
                    <div>
                        <img className='appImageItems' src={hotelImg2}  alt="appImage" />
                    </div>
                    <div>
                        <img className='appImageItems' src={hotelImg3}  alt="appImage" />
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default HotelReservation;