import React from 'react';

import './../../../assets/css/employees.css';
import EmployeeCardContainer from './EmployeeCard/EmployeeCardContainer';

const EmployeeCardsContainer = () => {
    return (
        <div className="employee-cards">
            <EmployeeCardContainer />
            <EmployeeCardContainer />
            <EmployeeCardContainer />
            <EmployeeCardContainer />
            <EmployeeCardContainer />
            <EmployeeCardContainer />
            <EmployeeCardContainer />
            <EmployeeCardContainer />
        </div>
    );
};

export default EmployeeCardsContainer;