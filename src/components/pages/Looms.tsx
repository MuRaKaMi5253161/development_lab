import React from 'react';
import { useLocation } from "react-router-dom";

// css
import '../css/pages.css'

// skilsIcon
import htmlIcon from '../svg/html-5.svg';
import cssIcon from '../svg/css-3.svg';
import jsIcon from '../svg/javascript.svg';
import reactIcon from '../svg/react.svg';
import firebaseIcon from '../svg/firebase.svg';
import muiIcon from '../svg/material-ui.svg';

// appImage
import loomsImg1 from '../img/loomsImage1.png';
import loomsImg2 from '../img/loomsImage2.png';
import loomsImg3 from '../img/loomsImage3.png';

const Looms: React.FC = () => {

    const location = useLocation();
    const appName = location.state.appName;

    return(
        <div className='app'>
            <div className='appProfile'>
                <p className='appName'>{appName}</p>

                <p className='appUrl'>-URL-</p>
                <a href='https://looms-831f0.web.app' target='_blank' rel='noopener noreferrer' className='applink'>application</a><br/>
                <a href='https://github.com/MuRaKaMi5253161/looms' target='_blank' rel='noopener noreferrer' className='applink'>repository</a>

                <div>
                    <p className='appskil'>-skil-</p>
                    <span><img className='skilIcons' src={htmlIcon} alt='skilIcon' /></span>
                    <span><img className='skilIcons' src={cssIcon} alt='skilIcon' /></span>
                    <span><img className='skilIcons' src={jsIcon} alt='skilIcon' /></span>
                    <span><img className='skilIcons' src={reactIcon} alt='skilIcon' /></span>
                    <span><img className='skilIcons' src={firebaseIcon} alt='skilIcon' /></span>
                    <span><img className='skilIcons' src={muiIcon} alt='skilIcon' /></span>
                </div> 

                <div className='appImage'>
                    <p className='appImageText'>-Image-</p>
                    <div>
                        <img className='appImageItems' src={loomsImg1}  alt="appImage" />
                    </div>
                    <div>
                        <img className='appImageItems' src={loomsImg2}  alt="appImage" />
                    </div>
                    <div>
                        <img className='appImageItems' src={loomsImg3}  alt="appImage" />
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Looms;