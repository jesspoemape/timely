import React, { Component } from 'react';
import './../../assets/css/dashboard.css';

import Header from './../Shared/Header/HeaderContainer';
import PageHeader from './PageHeader';
import Sidebar from './../Shared/Sidebar/SidebarContainer';

class DashboardContainer extends Component {
    render() {
        return (
            <div className="dashboard">
                <Header />
                <div className="dashboard--body__main">
                    <Sidebar />
                    <div className="dashboard--body">
                        <PageHeader />
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardContainer;