import React from 'react';
import user1 from '../../../assets/images/people1.png'
import user2 from '../../../assets/images/people2.png'
import user3 from '../../../assets/images/people3.png'
import quote from '../../../assets/icons/quote.svg'
import Review from './Review';

const Testimonial = () => {
    const userReview=[
        {
            id:1,
            name:'Winson Herry',
            photo:user1,
            comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            place:'United States'
        },
        {
            id:2,
            name:'Ayesha Siddika',
            photo:user2,
            comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            place:'Bangladesh'
        },
        {
            id:3,
            name:'Maria ',
            photo:user3,
            comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            place:'Bogura,Bangladesh'
        }
    ]
    return (
        <div className='my-20 px-10'>
            <div className='flex justify-between '>
                <div>
                <p className='text-lg font-bold text-primary'> Testimonial</p>
                <h2 className='text-3xl '>What Our Patients Says</h2>
                </div>
                <img src={quote} alt="" className='w-1/6' />
            </div>
            <div className='grid gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    userReview.map(data=><Review key={data.id} data={data}></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;