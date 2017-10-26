import React from 'react';

import NavItem from './NavItem';
import dash from './../../../../assets/svg/dashboard.svg';
import calendar from './../../../../assets/svg/calendar.svg';
import employees from './../../../../assets/svg/employees.svg';
import resources from './../../../../assets/svg/resources.svg';


const NavContainer = () => {
    return (
        <div>
            <NavItem name="dashboard" svg={dash}/>
            <NavItem name="calendar" svg={calendar}/>
            <NavItem name="employees" svg={employees}/>
            <NavItem name="resources" svg={resources}/>
        </div>
    );
};

export default NavContainer;