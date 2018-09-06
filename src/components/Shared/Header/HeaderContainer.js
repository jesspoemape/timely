import React from 'react';

import './../../../assets/css/header.css'
import link from './../../../assets/svg/link.svg';

const HeaderContainer = () => {
    return (
        <div className="header">
            <div className="header--logo">timely</div>
            <div className="header--link">
                <img className="header--link-svg" src={link} alt="link"/>
            </div>
        </div>
    );
};

export default HeaderContainer;