import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NationalNewsDetails = () => {
    const [detailsnational, setDetailsnational] = useState({})
    const {naId} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/nationalnews/${naId}`)
        .then(res => res.json())
        .then(data => setDetailsnational(data))
    },[naId])
    return (
        <div className='mt-12'>
            <div className="text-start py-5">
                        <h1 className='font-bold text-4xl'>{detailsnational.title}</h1>
                        <p className=''>তারিখ:{detailsnational.date}</p>
                        <p className=''>সময়:{detailsnational.time}</p>
                </div>
                <div className='newsImage'>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="w-full h-96 my-12" />
                </div>
                <div className='text-2xl text-justify py-10'>
                    <p>{detailsnational.details}
                    </p>
            </div>
        </div>
    );
};

export default NationalNewsDetails;