import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ShowSearchNews = () => {
    const [getnews, setNatioalnanews] = useState({})

    useEffect(() => {
        fetch('https://news-hub-server-six.vercel.app/getNews')
        .then(res => res.json())
        .then(data => setNatioalnanews(data))
    })
    return (
        <div className='mt-12'>
            <div className="text-start py-5">
                        <h1 className='font-bold text-4xl'>{getnews.title}</h1>
                        <p className=''>তারিখ:{getnews.date}</p>
                        <p className=''>সময়:{getnews.time}</p>
                </div>
                <div className='newsImage'>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="w-full h-96 my-12" />
                </div>
                <div className='text-2xl text-justify py-10'>
                    <p>{getnews.details}
                    </p>
            </div>
        </div>
    );
};

export default ShowSearchNews;