/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import chair from '../../assets/images/chair.png';
import BGchair from '../../assets/images/bg.png';
// import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
// import { format, setDate } from 'date-fns';



    
// const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
const AppointmentBanner = ({date,setDate}) => {
   

//   let footer = <p>Please pick a day.</p>;
//   if (selected) {
//     footer = <p>You picked {format(selected, 'PP')}.</p>;
//   }
    return (
        <header className='my-10'>
            <div style={{
            background: `url(${BGchair})`
        }} className="hero">
                
                    <div>

                    <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl " />
                    <div className='mr-6 sm:w-full'>
                        {/* <DayPicker 
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        /> */}

<DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
      
    />
    {/* <p><span className='font-bold'>Date:  </span></p> */}
                    </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default AppointmentBanner;