import React from 'react';
import Banner from './Banner';
import SliderMain from './SliderMain';

const SliderTo = () => {
   
  
    return (
        <div className="lg:grid grid-cols-3 gap-4  mb-12 ">
            <div className="col-span-2">
                <SliderMain/>
            </div>
            <div className=''>
                <Banner/>
            </div>
        </div>
    );
};

export default SliderTo;