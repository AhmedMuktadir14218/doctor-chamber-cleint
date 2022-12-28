import React from 'react';
import HomeServiceCart from './HomeServiceCart';
import fluride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';

const HomeService = () => {
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12 text-center'>
                <HomeServiceCart bgColor="bg-primary" cardTitle="Fluoride Treatment" img={fluride}> </HomeServiceCart>
                <HomeServiceCart bgColor="bg-accent" cardTitle="Cavity Filling" img={cavity}> </HomeServiceCart>
                <HomeServiceCart bgColor="bg-primary" cardTitle="Teeth Whitening" img={whitening}> </HomeServiceCart>
            </div>

        </div>
    );
};

export default HomeService;