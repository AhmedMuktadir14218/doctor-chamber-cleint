import React from 'react';

const BookingModal = ({treatment}) => {
    const { name, slots } = treatment;
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="booking-modal" className="btn">open modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    

                    <form className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled  className="input w-full input-bordered " />
                        <select name="slot" className="select select-bordered w-full">
                        </select>
                        <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>


                    {/* <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;