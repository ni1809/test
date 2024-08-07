import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import Product from './components/Product';
import './App.css';

function App() {
  const [employees] = useState([
    { name: 'John Doe', age: 30, salary: 50000, designation: 'Developer' },
    { name: 'Jane Smith', age: 25, salary: 45000, designation: 'Designer' },
    { name: 'Mark Johnson', age: 35, salary: 60000, designation: 'Manager' },
  ]);

  const initialProduct = {
    name: 'Laptop',
    price: 1000,
    inStock: true,
  };

  return (
    <div className="App">
      <EmployeeList employees={employees} />
      <Product product={initialProduct} />
    </div>
  );
}

export default App;
