import React, { useEffect, useState } from 'react';
import pakistan from '../../assets/images/antorjatik/pakistan.jpg';
import bilaoe from '../../assets/images/antorjatik/bilaoe.jpg';
import rasia from '../../assets/images/antorjatik/rasia.jpg';
import dekha from '../../assets/images/antorjatik/dekha.jpg';
import { Link } from 'react-router-dom';
import './HomeSportNews.css';

const HomeScienceNews = () => {
    const [showinternational, setShowsinternational] = useState([]);
   
    useEffect(() => {
        fetch(`http://localhost:5000/internationalnews`)
        .then(res => res.json())
        .then(data => setShowsinternational(data));
    },[]);
    const singleNews = showinternational[0];
    const singleNews2 = showinternational[1];
    const singleNews3 = showinternational[2];
    const singleNews4 = showinternational[3];
    return (
        <div className='sportN mb-12'>
             <div className="mainTitle pb-0 flex items-center">
                    <h2 className='text-2xl '>আন্তর্জাতিক</h2>
                    <Link to="/allnews"><h2 className='markLink text-[blue] mr-auto'>সকল খবর</h2></Link>
                </div>
            <div className="grid grid-rows-3 grid-flow-col gap-4 mb-12 showBox">
           
                <div className='showBox1'>
                <div className="row-span-3">
                            <div className="firstBox w-full">
                            <img src={pakistan} alt="" className='lg:h-[350px] lg:w-[550px]'/>
                                <Link to={`/internationalnews/${singleNews?._id}`}>
                                <div className="lg:text-3xl lg:text-white absolute flex justify-center transform lg:-translate-y-1/2 left-5 right-5 lg:top-[70%]">
                                        <h1>{singleNews?.title}</h1>
                                    </div>
                                </Link>
                            </div>
                </div>
                </div>
                <div className="showBox2">
                <div className="lg:col-span-2">
                    <div className='secondBox resSecond homeItem'>
                        <div className=''>
                            <img src={rasia}alt=""  className='image'/>
                        </div>
                        <Link to={`/internationalnews/${singleNews2?._id}`}>
                            <div className='title'>
                                <p className=''>{singleNews2?.title}</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="lg:col-span-2">
                <div className='secondBox rsThird homeItem'>
                        <div>
                            <img src={dekha} alt="" className='image'/>
                        </div>
                        <Link to={`/internationalnews/${singleNews3?._id}`}>
                            <div className='title'>
                                <p className=''>{singleNews3?.title}</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="lg:col-span-2">
                <div className='secondBox rsFourth homeItem '>
                        <div>
                            <img src={bilaoe} alt="" className='image'/>
                        </div>
                        <Link to={`/internationalnews/${singleNews4?._id}`}>
                            <div className='title'>
                                <p className=''>{singleNews4?.title}</p>
                            </div>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );  
};

export default HomeScienceNews;