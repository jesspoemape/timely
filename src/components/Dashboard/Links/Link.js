import React from 'react';

const Link = ({label, logo}) => {
    return (
        <div className="link">
            <img className="link--logo" src={logo} alt={label}/>
            <div className="link--label">{label}</div>
        </div>
    );
};

export default Link;