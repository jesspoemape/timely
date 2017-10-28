import React from 'react';

import './../../../assets/css/dashboard.css';
import Link from './Link';

const LinksContainer = () => {
    return (
        <div className="links-container">
            <div className="links-container--header">Quick Links</div>
            <div className="links">
                <Link label="Slack" logo="https://a.slack-edge.com/436da/marketing/img/meta/app-256.png"/>
                <Link label="Expensify" logo="https://we.are.expensify.com/assets/img/icon-rounded.png" />
                <Link label="Trello" logo="https://seeklogo.com/images/T/trello-logo-CE7B690E34-seeklogo.com.png"/>
                <Link label="Github" logo="https://image.freepik.com/free-icon/github-logo-in-a-rounded-square_318-40761.jpg"/>
            </div>
        </div>
    );
};

export default LinksContainer;