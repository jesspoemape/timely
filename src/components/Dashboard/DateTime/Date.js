import React from 'react';

import './../../../assets/css/dashboard.css';

const Date = ({date, day}) => {
    return (
        <div className="date">
            <div className="date--day">{day}</div>
            <div className="date--date">{date}</div>
        </div>
    );
};

export default Date;