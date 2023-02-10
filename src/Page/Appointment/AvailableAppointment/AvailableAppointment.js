import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModals from '../BookingModals';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ SelectedDate }) => {

    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(SelectedDate, 'PP');

    const {data:appointmentOptions =[],refetch } = useQuery({ 
        queryKey: ['appointmentOption',date],
        queryFn: async () =>{ 
        const res = await fetch(`https://doctor-chamber-server.vercel.app/appointmentOptions?date=${date}`);
        const data = await res.json();
        return data
        } 
    
    })



    // useEffect(() => {
    //     fetch('https://doctor-chamber-server.vercel.app/appointmentOption')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])


    return (
        <div>
            <h4 className='text-center text-xl text-primary font-bold' >Available Services on {format(SelectedDate, 'PP')}</h4>
            <h3 className='text-center text-xl text-accent'>Please select our service.</h3>



            <section className='my-16'>
                {/* <p className='text-center text-secondary font-bold'>Available Appointments on {format(SelectedDate, 'PP')}</p> */}
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                    {
                        appointmentOptions.map(option => <AppointmentOption
                            key={option._id}
                            appointmentOption={option}
                            setTreatment={setTreatment}></AppointmentOption>)
                    }
                </div>
                {
                treatment &&
                <BookingModals
                SelectedDate={SelectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModals>
            }

            </section>
        </div>
    );
};

export default AvailableAppointment;