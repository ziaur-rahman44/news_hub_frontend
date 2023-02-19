import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InternationalNewsDetails = () => {
    const [detailsinternational, setDetailsinternational] = useState({})
    const {iaId} = useParams();

    useEffect(()=>{
        fetch(`https://news-hub-server-six.vercel.app/internationalnews/${iaId}`)
        .then(res => res.json())
        .then(data => setDetailsinternational(data))
    },[iaId])
    return (
        <div className='mt-12'>
                <div className="text-start py-5 px-3">
                        <h1 className='font-bold text-4xl'>{detailsinternational.title}</h1>
                        <p className=''>তারিখ:{detailsinternational.date}</p>
                        <p className=''>সময়:{detailsinternational.time}</p>
                </div>
                <div className='newsImage'>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="w-full h-96 my-12" />
                </div>
                <div className='text-2xl text-justify py-10 px-3'>
                    <p>{detailsinternational.details}
                    </p>
                </div>
        </div>
    );
};

export default InternationalNewsDetails;