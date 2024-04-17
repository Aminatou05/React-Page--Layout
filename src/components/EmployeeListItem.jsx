import React from 'react';

function EmployeeListItem({ name, position }) {
  return (
    <div className="EmployeeListItem">
      <div className="EmployeeName">{name}</div>
      <div className="EmployeePosition">{position}</div>
    </div>
  );
}

export default EmployeeListItem;
