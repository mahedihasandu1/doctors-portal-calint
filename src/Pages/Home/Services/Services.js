import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceData=[
        {
            id:1,
            name:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:fluoride
        },
        {
            id:2,
            name:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:cavity
        },
        {
            id:3,
            name:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:whitening
        },
    ]
    return (
        <div className='mt-32' >
            <div className='text-center'>
                <h2 className='text-primary uppercase to-secondary  text-lg font-semibold'>Our Services</h2>
                <h1 className='  text-3xl font-semibold'>Service We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
                {
                    serviceData.map(card=><ServiceCard key ={card.id}
                    card={card}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;