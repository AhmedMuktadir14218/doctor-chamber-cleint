import React from 'react';
import clockimg from "../../../assets/icons/clock.svg"
import InfoCard from './InfoCard';
import mapimg from '../../../assets/icons/marker.svg';
import phoneimg from '../../../assets/icons/phone.svg';


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
            <InfoCard bgColor="bg-primary"  cardTitle="Opening Hours"   img={clockimg}> </InfoCard>
          
            <InfoCard bgColor="bg-[#3A4256]" cardTitle="Visit our location" img={mapimg}> </InfoCard>
            <InfoCard bgColor="bg-primary" cardTitle="Contact us now" img={phoneimg}> </InfoCard>
        </div>
    );
};

export default Info;