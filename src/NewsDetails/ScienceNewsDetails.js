import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ScienceNewsDetails = () => {
    const {saId} = useParams();
    const [scienceItem, setScienceItem] = useState({});
    useEffect(()=>{
    fetch(`https://news-hub-server-six.vercel.app/sciencenews/${saId}`)
    .then(res => res.json())
    .then(data => setScienceItem(data))
},[saId])
    return (
        <div className='mt-12'>
            <div className="text-start py-5">
                        <h1 className='font-bold text-4xl'>{scienceItem.title}</h1>
                        <p className=''>তারিখ:{scienceItem.date}</p>
                       
                        <p className=''>সময়:{scienceItem.time}</p>
                </div>
                <div className='newsImage'>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="w-full h-96 my-12" />
                </div>
                <div className='text-2xl text-justify py-10'>
                    <p>{scienceItem.details}
                    </p>
            </div>
        </div>
    );
};

export default ScienceNewsDetails;