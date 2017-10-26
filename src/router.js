import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Splash from './components/Splash/SplashContainer';
import Dashboard from './components/Dashboard/DashboardContainer';
import Calendar from './components/Calendar/CalendarContainer';
import Employees from './components/Employees/EmployeesContainer';
import Resources from './components/Resources/ResourcesContainer';

export default (
    <Switch>
        <Route exact path='/' component={Splash}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/calendar' component={Calendar}/>
        <Route path='/employees' component={Employees}/>
        <Route path='/resources' component={Resources}/>
    </Switch>
);