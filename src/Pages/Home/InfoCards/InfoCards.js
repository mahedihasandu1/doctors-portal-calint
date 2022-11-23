import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker   from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const InfoCards = () => {
    const cardData=[
        {id:1,name:'Opening Hours',description:'Open 9.00am to 6.00pm everyday',logo:clock,bgClass:'bg-gradient-to-r from-primary to-secondary'},
        {id:2,name:'Visit Our Location',description:'Bogura-5800 ,Dhaka Bangladesh',logo:marker,bgClass:'bg-accent'},
        {id:3,name:'Contact us now',description:'+8800001254101',logo:phone, bgClass:'bg-gradient-to-r from-primary to-secondary'},
    ]
    return (
        <div className='grid sm:grid-cols-1  lg:grid-cols-3 gap-6'>
            {
                cardData.map(card=> <InfoCard card={card} key={card.id}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;