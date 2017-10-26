import React from 'react';

const NavItem = ({name, svg}) => {
    return (
        <div className="nav-item">
            <img className="nav-item--svg" src={svg} alt={name}/>
            <div className="nav-item--name">{name}</div>
        </div>
    );
};

export default NavItem;