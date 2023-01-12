import React from 'react';

const HomeServiceCart = ({ img , cardTitle,bgColor}) => {
    return (
        <div>
           < div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    
            </div>
        </div>
        </div>
       
    );
};

export default HomeServiceCart;