import React, { Component } from 'react';

import './../../assets/css/employees.css';
import HeaderContainer from "./../Shared/Header/HeaderContainer";
import SidebarContainer from "./../Shared/Sidebar/SidebarContainer";
import PageHeaderContainer from "./PageHeader/PageHeaderContainer";
import EmployeeCardsContainer from './EmployeeCards/EmployeeCardsContainer';


class EmployeesContainer extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <div className="employees--body__main">
                    <SidebarContainer />
                    <div className="employees--body">
                        <PageHeaderContainer />
                        <EmployeeCardsContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeesContainer;