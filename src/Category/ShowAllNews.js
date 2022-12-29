import React from 'react';
import InternationalNewsSliding from '../SlidingNews/InternationalNewsSliding';
import NationalNewsSliding from '../SlidingNews/NationalNewsSliding';
import ScienceNewsSliding from '../SlidingNews/ScienceNewsSliding';
import SportNewsSliding from '../SlidingNews/SportNewsSliding';

const ShowAllNews = () => {
    return (
        <div className='allNews my-12'>
           <InternationalNewsSliding></InternationalNewsSliding>
           <NationalNewsSliding></NationalNewsSliding>
           <ScienceNewsSliding></ScienceNewsSliding>
           <SportNewsSliding></SportNewsSliding>
        </div>
    );
};

export default ShowAllNews;