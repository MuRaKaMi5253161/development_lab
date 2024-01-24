import React from 'react'
// import React, { useEffect, useState } from 'react'
import './css/top.css';
import AppContents from './appContents'
// import db from '../firebase';
// import {DocumentData, collection, getDocs} from 'firebase/firestore';

const Top: React.FC = () => {

    // documentDataの型指定しておく
    // const [apps, setApps] = useState<DocumentData>([]);
    
    // useEffect(() => {
    //     const appData = collection(db, "app");
    //     getDocs(appData).then((querySnapshots) => {
    //     setApps(querySnapshots.docs.map((doc) => doc.data()));
    //     });
    // }, []);
    

    return (
        <div className='topArea'>
            <div className='Title'>
                <p className='TitleText'>development_lab</p>
            </div>
            <div className='profile'>
                <p className='profileTitle'>-開発者-</p>
                <p>Murakami Taichi</p>
            </div>

            <div className='appListtitle'>
                <p>制作履歴</p>  
            </div>
            <div className='contents'>
                <div className='contentsItems'>
                        {/* {apps.map((app:any) => (
                            <div className='contentsItem'>
                            <AppContents
                                appNameText={app.appName}
                                appCreateDate={app.appCreateDate}
                            />
                            </div>
                        ))} */}
                    <div className='contentsItem'>
                        <AppContents
                        appNameText="Looms"
                        appCreateDate="2022/9"
                        />
                    </div>
                    <div className='contentsItem'>
                        <AppContents
                        appNameText="HotelReservation"
                        appCreateDate="2022/11"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;
