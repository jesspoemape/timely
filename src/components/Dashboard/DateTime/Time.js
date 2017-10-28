import React from 'react';

import './../../../assets/css/dashboard.css';

const Time = ({time, ampm}) => {
    return (
        <div className="time">
            <div className="time--time">{time}</div>
            <div className="time--ampm">{ampm}</div>
        </div>
    );
};

export default Time;