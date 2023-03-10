import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import appointment from '../../assets/images/bg.png'

const ContactUs = () => {
    return (
        // <div className="container my-24 px-6 mx-auto bg-accent">
        <div className="  bg-accent">


  <section className="mt-32 p-6 text-center text-gray-800 " style={{
            background: `url(${appointment})`
        }}>


    <div className=' mb-10' >
    <h2 className="text-lg  text-primary">Contact us</h2>
    <h2 className="text-3xl  text-white">Stay connected with us</h2>
      


    </div>
    <div className="max-w-[700px] mx-auto px-3 lg:px-6">
     
      <form>
        <div className="form-group mb-6">
          <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
            placeholder="Name"/>
        </div>
        <div className="form-group mb-6">
          <input type="email" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
            placeholder="Email address"/>
        </div>
        <div className="form-group mb-6">
          <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
        </div>
        <div className="form-group form-check text-center mb-6">
          {/* <input type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="exampleCheck87" checked /> */}
          {/* <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
            message</label> */}
        </div>
       <PrimaryButton>Submit</PrimaryButton>
      </form>
    </div>
  </section>


</div>
    );
};

export default ContactUs;