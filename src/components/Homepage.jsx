import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';
import EmployeePage from './EmployeePage';

function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <SearchBar />
      <EmployeeList />
      <EmployeePage/>
    </div>
  );
}

export default Homepage;