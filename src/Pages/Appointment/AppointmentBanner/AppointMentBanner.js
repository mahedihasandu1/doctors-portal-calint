import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointMentBanner = ({selectedDate,setSelectedDate}) => {
   

    return (
        <header>
            <div className="hero lg:h-[738px] px-5 bg-banner">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='/' src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='md:mr-24'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointMentBanner;