import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SportsNewsDetails = () => {
    const {sId} = useParams();
    const [detailsitem, setDetailsitem] = useState({});
    useEffect(()=>{
    fetch(`http://localhost:5000/sportnews/${sId}`)
    .then(res => res.json())
    .then(data => setDetailsitem(data))
},[sId])
    return (
        <div className='mt-12'>
            
            <div className="text-start py-5">
                        <h1 className='font-bold text-4xl '>{detailsitem.title}</h1>
                        <p className=''>তারিখ:{detailsitem.date}</p>
                        <p className=''>সময়:{detailsitem.time}</p>
                </div>
                <div className='newsImage'>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="w-full h-96 my-12" />
                </div>
                <div className='text-2xl text-justify py-10'>
                    <p>{detailsitem.details}
                    </p>
            </div>
        </div>
     
    );
};

export default SportsNewsDetails;