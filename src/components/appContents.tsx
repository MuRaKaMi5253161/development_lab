import React from 'react';
import { useNavigate } from "react-router-dom"
import './css/appContents.css'
import demoImg from '../components/img/demoapp.jpg'


const AppContents: React.FC = () => {

    const navigation = useNavigate();

    // いずれfirebaseから持ってくる
    const appNameText = "デモアプリ";
    const appCreateDate = "2022/09";

    const moveAppPage = () => {
        navigation('/Looms',{ state: { appName: appNameText, date: appCreateDate }});
    }

    return (
       <div className='app' onClick={moveAppPage}>
            <div className='appBox'>
                <div className='appImg'>
                    <img src={demoImg}  alt="アイコン" />
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