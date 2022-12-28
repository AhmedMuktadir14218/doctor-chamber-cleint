/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";

const Banner = () => {
    return (
        <div >
            <div style={{backgroundImage:"url(../../../assets/images/bg.png)"}} className="hero min-h-screen px-12 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-md rounded-lg shadow-2xl" />
                    <div className='text-left'>
                        <h1 className="text-5xl  font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;