import React from 'react';
import {NavLink, Link, Outlet } from 'react-router-dom';
import './Banner.css'

const DrawerNews = () => {
    var listItems = document.querySelectorAll("ul li");
    listItems.forEach(function(item) {
        item.onClick.style.backgroundColor = "blue";
      });
      
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content drawer-mobile flex justify-start flex-col">
                <div className="w-full navbar bg-base-300">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost bg-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="white inline-block w-6 h-6 strokeCurrent"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                <div className="px-5 mx-2 text-primary ">ক্যাটাগরী</div>
                <div className="flex-0 hidden lg:block mr-auto">
                    <ul className="menu catmanu menu-horizontal">
                        <li><NavLink exact activeClassName="active" to="/">খেলাধুলা</NavLink></li>
                        <li><NavLink activeClassName="active" to="/national">জাতীয়</NavLink></li>
                        <li><NavLink activeClassName="active" to="/international">আন্তর্জাতিক</NavLink></li>
                        <li><NavLink activeClassName="active" to="/science">বিজ্ঞান ও প্রযুক্তি</NavLink></li>
                    </ul>
                </div>
                </div>
                <div></div>
                <Outlet></Outlet>
            </div> 
            <div className="drawer-side ">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                <ul className="menu catmanu p-4 overflow-y-auto w-80 bg-base-100">
                    <li ><Link to="/">খেলাধুলা</Link></li>
                    <li><Link to="/national">জাতীয়</Link></li>
                    <li><Link to="/international">আন্তর্জাতিক</Link></li>
                    <li><Link to="/science">বিজ্ঞান ও প্রযুক্তি</Link></li>
                </ul>
               
            </div>
        </div>
    );
};

export default DrawerNews;