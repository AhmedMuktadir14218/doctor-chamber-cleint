import React from 'react';
// import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';

import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [SelectedDate, setDate] = React.useState(new Date());
    return (
        <div>
            <AppointmentBanner SelectedDate={SelectedDate} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment SelectedDate={SelectedDate}></AvailableAppointment>
            
        {/* <Footer></Footer>             */}
        </div>
        
    );
};

export default Appointment;