import React from "react";
import { useNavigate } from "react-router-dom"
import './css/appContents.css'
import demoImg from '../components/img/demoapp.jpg'


const AppContents: React.FC<{ appNameText: any; appCreateDate: any; }> = (props) => {

    const navigation = useNavigate();

    // いずれfirebaseから持ってくる
    const appNameText = props.appNameText;
    const appCreateDate = props.appCreateDate;

    console.log(appNameText);

    const moveAppPage = () => {
        navigation('/' + appNameText,{ state: { appName: appNameText, date: appCreateDate }});
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