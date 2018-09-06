import React from 'react';

import './../../../assets/css/employees.css';
import plus from './../../../assets/svg/plus.svg';

const AddEmployee = () => {
    return (
        <img className="add-employee--svg" src={plus} alt="plus"/>
    );
};

export default AddEmployee;