import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [cart] = useCart();
    
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">

          {
            isAdmin ? <>
            
            <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItem">
              <FaUtensils></FaUtensils> Add  An Item
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              <FaWallet></FaWallet> Manege Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaBook></FaBook> Manege Bookings (Not Implemented)
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allUsers">
              <FaUsers></FaUsers> All Users
            </NavLink>
          </li>
            
            </> : <>
            
            <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaCalendarAlt></FaCalendarAlt> Reservation (Not Implemented)
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaWallet></FaWallet> Payment History (Not Implemented)
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myCart">
              <FaShoppingCart></FaShoppingCart> 
              My Cart
              <span className="badge badge-secondary">+{cart?.length || 0}</span>
            </NavLink>
            
          </li>
            </>
          }

        
          <div className="divider"></div>
          <li>
          <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
          <NavLink to="/menu"> Menu</NavLink>
          </li>
          <li>
          <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
