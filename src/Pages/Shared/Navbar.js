
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './NavBar.css'
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from './SearchBar';

const Navbar = () => {
    // const router = useRoutes()
    // const [searchParams, setSearchParams] = useState("");
    // const sendData = e => {
    //     e.preventDefault()
    //     router.push({
    //         pathname:`search/${searchParams}`
    //     })
    //     setSearchParams("")
    // }
    // const sendData = event => {
    //     event.preventDefault();
    //     const searchResults = document.getElementById("searchResult");
    //     fetch('http://localhost:5000/getNews',{
    //         method: 'POST',
    //         headers:{
    //         'content-type': 'application/json',
    //     },
    //     body:JSON.stringify({payload: event.target.value}),
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         const news = data.payload;
    //         console.log(news);
    //         searchResults.innerHTML = ""
    //         if(news.length > 1){
    //             searchResults.innerHTML = "<p>NOTHING FOUND</p>"
    //             return;
    //         };
    //         news.forEach((item, index)=>{
    //             if(index > 0) searchResults.innerHTML += "<hr>";
    //             searchResults.innerHTML += `<p>${item.title}</p>`
                
    //         })
    //         return;
    //     })
    // }
    // const [searchParams, setSearchParams] = useSearchParams();
    // const handleChange = e => {
    //     e.preventDefault()
    //     setSearchParams({query: e.target.value});
    //   };
    //   console.log(searchParams.get('query'));
      
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    const menuItem = <>
        <li><Link to="/">হোম</Link></li>
        <li><Link to="/sportsnews">খেলাধুলা</Link></li>
        <li><Link to="/nationalsnews">জাতীয়</Link></li>
        <li><Link to="/internationalnews">আন্তর্জাতিক</Link></li>
        <li><Link to="/sciencenews">বিজ্ঞান ও প্রযুক্তি</Link></li>
        {
                user && <li><Link to="/dashboard">ড্যাশবোর্ড</Link></li>
            }
            <li>{user? <button className="btn btn-active btn-ghost text-2xl" onClick={logout}>লগআউট</button>:<Link to="/login">লগ ইন</Link>} </li>
            <li class="lg:ml-auto"><SearchBar/></li>
    </>
        
    
    return (
        <div className="navbar bg-base-100 menuList">
            <div className="navbar-center ">
                <div className="dropdown ">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 menuList shadow  rounded-box w-52">
                        {menuItem}
                        
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl mr-24">LOGO</Link>
               
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                    
                </ul>
                
            </div>
            
        </div>
    );
};

export default Navbar;