import React from 'react';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';
import dash from './../../../../assets/svg/dashboard-light.svg';
import calendar from './../../../../assets/svg/calendar.svg';
import employees from './../../../../assets/svg/employees-light.svg';
import resources from './../../../../assets/svg/resources.svg';


const NavContainer = () => {
    return (
        <div>
            <Link to="/dashboard"><NavItem name="dashboard" svg={dash}/></Link>
            <Link to="/calendar"><NavItem name="calendar" svg={calendar}/></Link>
            <Link to="/employees"><NavItem name="employees" svg={employees}/></Link>
            <Link to="/resources"><NavItem name="resources" svg={resources}/></Link>
        </div>
    );
};

export default NavContainer;