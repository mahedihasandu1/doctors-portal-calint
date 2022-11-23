import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import AppointMentBanner from './AppointmentBanner/AppointMentBanner';
import AvailableAppointMent from './AvailableAppointment/AvailableAppointMent';

const Appointment = () => {
    const [selectedDate, setSelectedDate] =useState(new Date())
    return (
        <div>
            <AppointMentBanner setSelectedDate={setSelectedDate} selectedDate={selectedDate} ></AppointMentBanner>
        <AvailableAppointMent selectedDate={selectedDate}></AvailableAppointMent>
        <Toaster/>
        </div>
    );
};

export default Appointment;