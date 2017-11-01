import React from 'react';

import './../../assets/css/dashboard.css';
import dash from './../../assets/svg/dashboard-dark.svg';

const PageHeader = () => {
    return (
        <div className="page-header">
            <img className="page-header--svg" src={dash} alt="dashboard"/>
            <div className="page-header--name">Dashboard</div>
        </div>
    );
};

export default PageHeader;