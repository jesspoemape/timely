import React from 'react';
import moment from 'moment';

import './../../../assets/css/dashboard.css';
import Time from './Time';
import Date from './Date';
import CalendarButton from './CalendarButton';

const time = moment().format("h:mm A");
const date = moment().format("dddd MMMM D, YYYY");

const DateTimeContainer = () => {
    return (
        <div className="date-time">
            <div className="date-time--header"></div>
            <Time time={time}/>
            <Date date={date}/>
            <CalendarButton />
        </div>
    );
};

export default DateTimeContainer;