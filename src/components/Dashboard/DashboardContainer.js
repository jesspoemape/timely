import React, { Component } from 'react';
import './../../assets/css/dashboard.css';

import Header from './../Shared/Header/HeaderContainer';
import PageHeader from './PageHeader';

class DashboardContainer extends Component {
    render() {
        return (
            <div>
                <Header />
                Dashboard
                <PageHeader />
            </div>
        );
    }
}

export default DashboardContainer;