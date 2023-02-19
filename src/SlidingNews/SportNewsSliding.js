import React, { useEffect, useRef, useState } from 'react';
import './SportNewsSliding.css';
import news from '../assets/images/image-2.jpg';
import right from '../assets/images/button/R.png';
import left from '../assets/images/button/L.png';
import { Link } from 'react-router-dom';

const SportNewsSliding = () => {
    const [showsport, setShowsport] = useState([]);
    const carousel = useRef(null)
    
    useEffect(() => {
        fetch(`https://news-hub-server-six.vercel.app/sportnews`)
        .then(res => res.json())
        .then(data => setShowsport(data));
    },[]);

    const handleLeft = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRight = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (
        <div className='container'>
            <div className='sportN'>
                <div className="flex items-center titleSlide">
                    <div className=''>
                    <h2 className='text-2xl'>খেলাধুলা</h2>
                </div>
                <div className='clickButton ml-auto'>
                    <button onClick={handleLeft}>
                        <img src={right} alt="" className='h-12'/>
                    </button>
                    <button onClick={handleRight}>
                        <img src={left} alt="" className='h-12'/>
                    </button>
                </div>
                </div>
            <div className='' >
                <div className="text-dark carousel" ref={carousel}>
                {showsport.map((item)=>{
                    const {_id,title} = item;
                return(
                    <div className="shadow-xl item flex-none" key={_id}>
                            <Link to={`/sportnews/${_id}`}>
                        <figure className="">
                            <img src={news} alt="Shoes" className=" h-36 w-auto" />
                        </figure>
                        <div className="w-60">
                            <h2 className="font-bold titles text-justify px-2">{title}</h2>
                            <p className='text-start px-2 py-2 text-[#5b54f2]'>পুরো খবর...</p>
                        </div>
                            </Link>
                    </div>)
                    })}
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default SportNewsSliding;