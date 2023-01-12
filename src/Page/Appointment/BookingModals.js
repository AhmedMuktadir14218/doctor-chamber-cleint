import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({treatment,SelectedDate,setTreatment}) => {
    const { user } = useContext(AuthContext);
    const {_id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        // const booking = {
        //     appointmentDate: date,
        //     treatment: name,
        //     patient: name,
        //     slot,
        //     email,
        //     phone,
        // }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        console.log(slot,name,email,phone);
        setTreatment(null);
    }

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
                    

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={format(SelectedDate, 'PP')} disabled  className="input w-full input-bordered " />
                        <select name="slot" className="select select-bordered w-full">
                        {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Patient Name" className="input w-full input-bordered" />
                        <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" value={user.email} />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;