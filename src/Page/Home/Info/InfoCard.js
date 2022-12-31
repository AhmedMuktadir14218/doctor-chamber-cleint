import React from 'react';

const InfoCard = ({ img , cardTitle,bgColor}) => {
    return (
        
            <div className={`card lg:card-side bg-base-100 shadow-xl   ${bgColor} text-left`}>
                <figure className='pl-5 p-4'><img src={img} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title ">{cardTitle}</h2>
                    <p>Comming Soon Line never used</p>
                    
                </div>
            </div>


        
    );
};

export default InfoCard;