import React from 'react';
import {Link} from 'react-router-dom';

import './../../../assets/css/dashboard.css';

const CalendarButton = () => {
    return (
        <div className="calendar-btn">
            <Link to="/calendar"><button className="calendar-btn--btn">Calendar</button></Link>
        </div>
    );
};

export default CalendarButton;