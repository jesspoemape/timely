import React from 'react';

import search from './../../../assets/svg/search.svg';

const SearchEmployees = () => {
    return (
        <div className="search-employees">
            <img className="search-employees--svg" src={search} alt="search"/>
            <input className="search-employees--input" type="text" placeholder="Search Employees"/>
        </div>  
    );
};

export default SearchEmployees;