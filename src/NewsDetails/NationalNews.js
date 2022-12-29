import React, { useEffect, useState } from 'react';
import ShowNationalNews from './ShowNationalNews';

const NationalNews = () => {
    const [nationalnews, setNatioalnanews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/nationalnews')
        .then(res => res.json())
        .then(data => setNatioalnanews(data))
    })
    return (
        <div className='mt-12 mb-12 sportN'>
            <div className='mainTitle pb-1'>
            <h2>জাতীয় সংবাদ</h2>
            </div>
            <div className="grid lg:grid-cols-4 gap-4 text-dark">
            {
                nationalnews.map(nationalnews =><ShowNationalNews
                key={nationalnews._id}
                nationalnews={nationalnews}
                >
                </ShowNationalNews>)
            }
            </div>
        </div>
    );
};

export default NationalNews;