import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
     <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                {/* Page content here */}
                <h2 className='py-3'>DeshBoard</h2>
                <Outlet/>
                
            </div> 
            <div className="drawer-side max-h-fit">
                <label htmlFor="my-drawer-2" className="drawer-overlay" /> 
                <ul className="menu px-5  w-fit  bg-[#343a40] text-start text-white text-md">
                {/* Sidebar content here */}
                <li><Link to="/dashboard/newslist">News List</Link></li>
                <li><Link to="/dashboard/newspost">News Post</Link></li>
                
                </ul>
            </div>
        </div>

    );
};

export default Dashboard;