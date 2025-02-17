import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h3>dashboard</h3>

      <Link to ='dashboard/mobiles'>Mobiles</Link>
      <Link to="dashboard/laptops">Laptops</Link>
      <Link to='dashboard/electronics'>Electronics</Link>

      <Outlet></Outlet>
    </div>
  )
}

export default Dashboard
