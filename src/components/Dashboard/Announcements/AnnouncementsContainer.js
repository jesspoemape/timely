import React, { Component } from 'react';

import './../../../assets/css/dashboard.css';
import fire from './../../../assets/svg/fire.svg';
import AddAnnouncement from './AddAnnouncement';
import Announcement from './Announcement';

class AnnouncementsContainer extends Component {
    render() {
        return (
            <div className="announcements">
                <div className="announcements--header">
                    <img className="announcements--header-svg" src={fire} alt="fire"/>
                    <div className="announcements--header-title">Announcements</div>
                    <AddAnnouncement />
                </div>
                <Announcement />
            </div>
        );
    }
}

export default AnnouncementsContainer;