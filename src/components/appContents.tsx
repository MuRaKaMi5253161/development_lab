import React from 'react';
import './css/appContents.css'

const AppContents: React.FC = () => {
    return (
       <div className='appName'>
            <div>
                
            </div>
            <div className='appNameInBox'>
                <p>モックアプリ</p>
                <p>appurl or このアプリは未公開です</p>
                <p>モックアプリの説明をここに書きます</p>
            </div>
       </div>
    );
};

export default AppContents;