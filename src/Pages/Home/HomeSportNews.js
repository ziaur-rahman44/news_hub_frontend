import React, { useEffect, useState } from 'react';
import './HomeSportNews.css';
import salauddin from '../../assets/sport/salauddin.jpg';
import mahmudullah from '../../assets/sport/mahmudullah.jpg';
import shakib from '../../assets/sport/shakib.jpg';
import messi from '../../assets/sport/messi.jpg';
import { Link } from 'react-router-dom';

const SportsNews = () => {
    const [shownews, setShowNewses] = useState([]);
   
    useEffect(() => {
        fetch(`http://localhost:5000/sportnews`)
        .then(res => res.json())
        .then(data => setShowNewses(data));
    },[]);
    const singleNews = shownews[0];
    const singleNews2 = shownews[1];
    const singleNews3 = shownews[2];
    const singleNews4 = shownews[3];
    return (
        <div className='sportN mb-12'>
             <div className="mainTitle pb-0 flex items-center">
                    <h2 className='text-2xl'>খেলাধুলা</h2>
                    <Link to="/allnews"><h2 clssName='markLink mr-auto'>সকল খবর</h2></Link>
                </div>
            <div className="lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-4 mb-12 showBox">
           
                <div className='showBox1'>
                <div className="row-span-3">
                            <div className="firstBox w-full">
                            <img src={mahmudullah} alt="" className='lg:h-[350px] lg:w-[550px]'/>
                                <Link to={`/sportnews/${singleNews?._id}`}>
                                    {/* <div className="firstBoxtitle">
                                        <h5 className='text-3xl'>{singleNews?.title}</h5>
                                    </div> */}
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
                        <div className='rsImg'>
                            <img src={salauddin}alt=""  className='image'/>
                        </div>
                        <Link to={`/sportnews/${singleNews2?._id}`}>
                            <div className='title'>
                                <p className=''>{singleNews2?.title}</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="lg:col-span-2">
                <div className='secondBox rsThird homeItem'>
                        <div>
                            <img src={shakib} alt="" className='image'/>
                        </div>
                        <Link to={`/sportnews/${singleNews3?._id}`}>
                            <div className='title'>
                                <p className=''>{singleNews3?.title}</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="lg:col-span-2">
                <div className='secondBox rsFourth homeItem '>
                        <div>
                            <img src={messi} alt="" className='image'/>
                        </div>
                        <Link to={`/sportnews/${singleNews4?._id}`}>
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

export default SportsNews;