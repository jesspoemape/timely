import React, { Component } from 'react';

import './../../../assets/css/sidebar.css';
import NavContainer from './Navigation/NavContainer';

class SidebarContainer extends Component {
    render() {
        return (
            <div className="sidebar">
                <NavContainer />
            </div>
        );
    }
}

export default SidebarContainer;