import React from 'react';
import moment from 'moment';

import './../../../assets/css/dashboard.css';
import Time from './Time';
import Date from './Date';
import CalendarButton from './CalendarButton';

const now = moment();
const ampm = now.format("A");
const time = now.format("h:mm");
const day = now.format("dddd");
const date = now.format("MMMM D, YYYY");

const DateTimeContainer = () => {
    return (
        <div className="date-time">
            <div className="date-time--header">DATE</div>
            <Time time={time} ampm={ampm}/>
            <Date date={date} day={day}/>
            <CalendarButton />
        </div>
    );
};

export default DateTimeContainer;