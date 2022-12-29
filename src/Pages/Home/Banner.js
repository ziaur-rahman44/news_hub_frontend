import React, { useEffect, useState } from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
  const [showsport, setShowsport] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/sciencenews`)
        .then(res => res.json())
        .then(data => setShowsport(data));
    },[]);
    
    return (
      <div className='px-3 boxSamprotik'>
        <div className='titleTop'>
            <h2 className='text-center text-primary text-xl'>সাম্প্রতিক খবর</h2>
          </div>
        <div className='mainBox grid grid-cols-1'>
          {showsport.map((item)=>{
            const {_id,title} = item;
            return(
              <div className='itemBanner' key={_id}>
              <Link to={`/sciencenews/${_id}`}><h3>{title}</h3></Link>
            </div>
            )
          })}
        </div>
      </div>
          
        
    );
};

export default Banner;