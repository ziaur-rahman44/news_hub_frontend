import React, { useEffect, useState } from 'react';
import bahati from '../../assets/sport/science/bahati.jpg';
import jin from '../../assets/sport/science/jin.jpg';
import karen from '../../assets/sport/science/karen.jpg';
import { Link } from 'react-router-dom';
import './HomeSportNews.css';

const HomeScienceNews = () => {
    const [showsciencenews, setShowsciencenews] = useState([]);
   
    useEffect(() => {
        fetch(`https://news-hub-server-six.vercel.app/sciencenews`)
        .then(res => res.json())
        .then(data => setShowsciencenews(data));
    },[]);
    const singleNews = showsciencenews[0];
    const singleNews2 = showsciencenews[1];
    const singleNews3 = showsciencenews[2];
    const singleNews4 = showsciencenews[3];
    return (
        <div className='sportN mb-12'>
             <div className="mainTitle pb-0 flex items-center">
                    <h2 className='text-2xl'>বিজ্ঞান ও প্রযুক্তি</h2>
                    <Link to="/allnews"><h2 className=' markLink mr-auto text-[blue]'>সকল খবর</h2></Link>
                </div>
            <div className="grid grid-rows-3 grid-flow-col gap-4 mb-12 showBox">
           
                <div className='showBox1'>
                <div className="row-span-3">
                            <div className="firstBox w-full">
                            <img src={bahati} alt="" className='lg:h-[350px] lg:w-[550px]'/>
                                <Link to={`/sciencenews/${singleNews?._id}`}>
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
                            <img src={jin}alt=""  className='image'/>
                        </div>
                        <Link to={`/sciencenews/${singleNews2?._id}`}>
                            <div className='title'>
                                <p className=''>{singleNews2?.title}</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="lg:col-span-2">
                <div className='secondBox rsThird homeItem'>
                        <div>
                            <img src={karen} alt="" className='image'/>
                        </div>
                        <Link to={`/sciencenews/${singleNews3?._id}`}>
                            <div className='title'>
                                <p className=''>{singleNews3?.title}</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="lg:col-span-2">
                <div className='secondBox rsFourth homeItem '>
                        <div>
                            <img src={bahati} alt="" className='image'/>
                        </div>
                        <Link to={`/sciencenews/${singleNews4?._id}`}>
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