import React from 'react';

const NavItem = ({name, svg}) => {
    return (
        <div className={`nav-item ${window.location.pathname.includes(name) ? 'nav-item-active' : ''}`}>
            <img className="nav-item--svg" src={svg} alt={name}/>
            <div className="nav-item--name">{name}</div>
        </div>
    );
};

export default NavItem;