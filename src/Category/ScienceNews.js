import React, { useEffect, useState } from 'react';
import ShowScienceNews from './ShowScienceNews';

const ScienceNews = () => {
    const [sciencenews, setSciencenews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/sciencenews')
        .then(res => res.json())
        .then(data => setSciencenews(data))
    })
    return (
            <div className='mt-12 mb-12 sportN'>
                <div className='mainTitle pb-1'>
                    <h2>বিজ্ঞান ও প্রযুক্তি সংবাদ</h2>
                </div>
                <div className="grid lg:grid-cols-4 gap-4 text-dark">
                {
                    sciencenews.map(sciencenews =><ShowScienceNews
                    key={sciencenews._id}
                    sciencenews={sciencenews}
                    >
                    </ShowScienceNews>)}
                </div>
            </div>
    );
};

export default ScienceNews;