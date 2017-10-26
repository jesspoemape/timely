import React from 'react';

import link from './../../../assets/svg/link.svg';

const Link = () => {
    return (
        <div className="header--link">
            <img className="header--link-svg" src={link} alt="link"/>
        </div>
    );
};

export default Link;