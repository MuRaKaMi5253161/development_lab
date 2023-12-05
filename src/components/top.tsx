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
                <p className='profileTitle'>-開発者-</p>
                <p>Murakami Taichi</p>
            </div>

            <div className='appListtitle'>
                <p>制作履歴</p>  
            </div>
            <div className='contents'>
                <div className='contentsItems'>
                    <div className='contentsItem'>
                        <AppContents />
                    </div>
                    <div className='contentsItem'>
                        <AppContents />
                    </div>
                    <div className='contentsItem'>
                        <AppContents />
                    </div>
                    <div className='contentsItem'>
                        <AppContents />
                    </div>
                    <div className='contentsItem'>
                        <AppContents />
                    </div>
                    <div className='contentsItem'>
                        <AppContents />
                    </div>
                    <div className='contentsItem'>
                        <AppContents />
                    </div>
                    <div className='contentsItem'>
                        <AppContents />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default top;
