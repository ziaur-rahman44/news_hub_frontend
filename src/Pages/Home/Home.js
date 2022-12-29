import React from 'react';
import SliderTo from './SliderTo';
import DrawerNews from './DrawerNews';
import SportsNews from './HomeSportNews';
import HomeScienceNews from './HomeScienceNews';
import HomeInternationalNews from './HomeInternationalNews';

const Home = () => {
    return (
        <div className='mt-12'>
            <SliderTo/>
            <SportsNews></SportsNews>
            <HomeScienceNews/>
            <HomeInternationalNews/>
            <DrawerNews/>
        </div>
    );
};

export default Home;