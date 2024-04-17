import React from "react";
import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
  return (
    <div className="EmployeeList">
      <EmployeeListItem id={1} name="James King" position="President and CEO" />
      <EmployeeListItem id={2} name="Julie Taylor" position="VP of Marketing" />
      <EmployeeListItem id={3} name="Eugene Lee" position="CFO" />
      <EmployeeListItem
        id={4}
        name="John Williams"
        position="VP of Engineering"
      />
      <EmployeeListItem id={5} name="Ray Moore" position="VP of Sales" />
      <EmployeeListItem id={6} name="Paul Jones" position="QA Manager" />
    </div>
    
  );
  
}

export default EmployeeList;
