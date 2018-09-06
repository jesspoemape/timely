import React from 'react';

import "./../../../assets/css/employees.css";
import employees from "./../../../assets/svg/employees-dark.svg";
import AddEmployee from './AddEmployee';
import SortByTeamContainer from './SortByTeam/SortByTeamContainer';
import SearchEmployees from './SearchEmployees';

const PageHeaderContainer = () => {
    return (
        <div className="page-header">
            <img className="page-header--svg" src={employees} alt="employees"/>
            <div className="page-header--name">Employees</div>
            <AddEmployee />
            <div className="page-header__right">
                <SortByTeamContainer />
                <SearchEmployees />
            </div>
        </div>
    );
};

export default PageHeaderContainer;