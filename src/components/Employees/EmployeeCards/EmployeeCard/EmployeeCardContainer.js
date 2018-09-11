import React from 'react';

import './../../../../assets/css/employees.css';
import developer from './../../../../assets/svg/developer.svg';

const EmployeeCardContainer = () => {
    return (
        <div className="employee-card">
            <div className="employee-card__status"><span>OOO</span></div>
            <img className="employee-card__img" src="https://via.placeholder.com/350x350" alt="profile"/>
            <div className="employee-card__team-icon"><img src={developer} alt="developer"/></div>
            <div className="employee-card__title">
                <p>Jessica Poemape</p>
                <span>Developer</span>
            </div>
            <div className="employee-card__details">
                <p>Email: <span className="employee-card__details-detail">jessica@me.com</span></p>
                <p>Phone: <span className="employee-card__details-detail">956.266.0068</span></p>
                <p>Slack: <span className="employee-card__details-detail">@jesspoemape</span></p>
            </div>
        </div>
    );
};

export default EmployeeCardContainer;