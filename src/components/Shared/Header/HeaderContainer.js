import React from 'react';

import './../../../assets/css/header.css'
import Logo from './Logo';
import Link from './Link';

const HeaderContainer = () => {
    return (
        <div className="header">
            <Logo />
            <Link />
        </div>
    );
};

export default HeaderContainer;