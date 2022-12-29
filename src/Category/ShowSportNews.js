import React from 'react';
import { Link } from 'react-router-dom';

const ShowSportNews = ({shownews}) => {
    const {title} = shownews
    return (
        <div className="shadow-xl">
            <Link to={`/sportnews/${shownews._id}`}>
                <figure className="">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className=" h-42 w-full" />
                </figure>
                <div className="">
                    <h2 className="font-bold text-justify px-2">{title}</h2>
                    <p className='text-justify px-2 py-2 text-[#5b54f2]'>পুরো খবর...</p>
                </div>
            </Link>
        </div>
    );
};

export default ShowSportNews;