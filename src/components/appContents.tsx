import React from "react";
import { useNavigate } from "react-router-dom"
import './css/appContents.css'
import demoImg from '../components/img/demoapp.jpg'
import HotelReservation from "./img/HotelReservationapp.png";
import Looms from "./img/Loomsapp.png";


const AppContents: React.FC<{ appNameText: any; appCreateDate: any; }> = (props) => {

    const navigation = useNavigate();

    // いずれfirebaseから持ってくる
    const appNameText = props.appNameText;
    const appCreateDate = props.appCreateDate;

    const getAppIcon = () => {
        if(appNameText === "HotelReservation") {
            return HotelReservation;
        } else if(appNameText === "Looms") {
            return Looms;
        } else {
            return demoImg;
        }
    }

    const moveAppPage = () => {
        navigation('/' + appNameText,{ state: { appName: appNameText, date: appCreateDate }});
    }

    return (
       <div className='app' onClick={moveAppPage}>
            <div className='appBox'>
                <div className='appImg'>
                    <img src={getAppIcon()} className="Img"  alt="アイコン" />
                </div>
                <div className='appName'>
                    <p className='appNameText'>{appNameText}</p>
                    <p className='appCreateDate'>{appCreateDate}</p>
                </div>
            </div>
       </div>
    );
};

export default AppContents;