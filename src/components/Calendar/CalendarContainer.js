import React, { Component } from 'react';
import Header from './../Shared/Header/HeaderContainer';
import Sidebar from './../Shared/Sidebar/SidebarContainer';
import Calender from './Calendar/CalendarContainer';

class CalendarContainer extends Component {
    render() {
        return (
            <div className="calendar">
                <Header />
                <div>
                    <Sidebar />
                    <div className="calendar--body">
                        <Calender />
                    </div>
                </div>
            </div>
        );
    }
}

export default CalendarContainer;