import React from 'react';
import './css/top.css';
import AppContents from './appContents'

const top: React.FC = () => {
    return (
        <div className='topArea'>
            <div className='Title'>
                <p className='TitleText'>development_lab</p>
            </div>
            <div className='profile'>
                <p>-開発者-</p>
                <p>Murakami Taichi</p>
            </div>

            <div className='appList title'>
                <p>-制作履歴-</p>  
            </div>
            <div className='contents'>
                <div className='contentsItem'>
                    <div>
                        <AppContents />
                    </div>
                    <div>
                        <AppContents />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default top;
