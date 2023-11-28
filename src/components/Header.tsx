import React from 'react';
// css
import './css/Header.css';

// ui
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header-menu-line">
                <span className="icon x">
                    <a href='https://twitter.com/unko____ta' target="_blank" rel="noopener noreferrer"><TwitterIcon className='Icon Twitter' /></a>
                </span>
                
                <span className="icon github">
                    <a href='https://github.com/MuRaKaMi5253161' target='_blank' rel='noopener noreferrer'><GitHubIcon className='Icon GitHub' /></a>
                </span>
            </div>
        </div>
    );
};

export default Header;