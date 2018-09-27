import React, { Component } from 'react';
import './../../assets/css/dashboard.css';

import Header from './../Shared/Header/HeaderContainer';
import PageHeader from './PageHeader';
import Sidebar from './../Shared/Sidebar/SidebarContainer';
import DateTimeContainer from './DateTime/DateTimeContainer';
import AnnouncementsContainer from './Announcements/AnnouncementsContainer';
import LinksContainer from './Links/LinksContainer';

class DashboardContainer extends Component {
    render() {
        return (
            <div className="dashboard">
                <Header />
                <div>
                    <Sidebar />
                    <div className="dashboard--body">
                        <div className="dashboard--body__announcements-date-time">
                            <PageHeader />
                        </div>
                        <div className="dashboard--body__links">
                            <AnnouncementsContainer />
                            <DateTimeContainer />
                        </div>
                        <LinksContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardContainer;