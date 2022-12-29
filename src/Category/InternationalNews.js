import React, { useEffect, useState } from 'react';
import ShowInternationalNews from './ShowInternationalNews';


const InternationalNews = () => {
    const [internationalnews, setInteratioalnanews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/internationalnews')
        .then(res => res.json())
        .then(data => setInteratioalnanews(data))
    })
    return (
        <div className='mt-12 mb-12 sportN'>
        <div className='mainTitle pb-1'>
        <h2>আন্তর্জাতিক সংবাদ</h2>
        </div>
        <div className="grid lg:grid-cols-4 gap-4 text-dark">
        {
            internationalnews.map(internationalnews =><ShowInternationalNews
            key={internationalnews._id}
            internationalnews={internationalnews}
            >
            </ShowInternationalNews>)}
        </div>
    </div>
    );
};

export default InternationalNews;