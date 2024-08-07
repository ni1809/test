import React from 'react';
import PropTypes from 'prop-types';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            Name: {employee.name}, Age: {employee.age}, Salary: {employee.salary}, Designation: {employee.designation}
          </li>
        ))}
      </ul>
    </div>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      salary: PropTypes.number.isRequired,
      designation: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EmployeeList;
