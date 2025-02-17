import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Error from './Error';
import Mobiles from './Mobiles';
import Laptops from './Laptops';
import Electronics from './Electronics';

const Master = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="dashboard/mobiles" element={<Mobiles />} />
          <Route path="dashboard/laptops" element={<Laptops />} />
          <Route path="dashboard/electronics" element={<Electronics />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Master;
