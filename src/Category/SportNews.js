import React, { useEffect, useState } from 'react';
import ShowSportNews from './ShowSportNews';
import './SportNews.css'

const SportNews = () => {
    const [shownews, setShowNewses] = useState([]);
    
    useEffect(() => {
        fetch(`https://news-hub-server-six.vercel.app/sportnews`)
        .then(res => res.json())
        .then(data => setShowNewses(data));
    },[]);

    return (
        <div className='my-24 sportN'>
            <div className='mainTitle pb-1'>
                <h2>খেলাধুলার সংবাদ</h2>
            </div>
            <div className=''>
                <div className="grid lg:grid-cols-4 gap-4 text-dark">
                    {
                        shownews.map(shownews => <ShowSportNews
                            key={shownews._id}
                            shownews={shownews}
                        >
                        </ShowSportNews>)
                    }
                </div>
            </div>
        </div>
    
    );
};

export default SportNews;