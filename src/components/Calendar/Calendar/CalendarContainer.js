import React from 'react';
import moment from 'moment';
import './../../../assets/css/calendar.css';

const CalenderContainer = () => {
    let days = [];
    const daysInMonth = moment("2012-02", "YYYY-MM").daysInMonth();
    for (let i = 0; i <= daysInMonth + 1; i++) {
        days.push(<div key={`day-${i}`} className="calendar--day">{i + 1}</div>);
    }
    return (
        <div className="calendar--main">
            <div className="calendar--container">
                <div className="calender--header">
                    <h1>November</h1>
                    <p>2018</p>
                </div>
                <div className="calender--month">
                    <span className="calendar--day__name">Sun</span>
                    <span className="calendar--day__name">Mon</span>
                    <span className="calendar--day__name">Tue</span>
                    <span className="calendar--day__name">Wed</span>
                    <span className="calendar--day__name">Thu</span>
                    <span className="calendar--day__name">Fri</span>
                    <span className="calendar--day__name">Sat</span>
                    {days.length > 0 && days}
                </div>
            </div>
        </div>
    );
}

export default CalenderContainer;
