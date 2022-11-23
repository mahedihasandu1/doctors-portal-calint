import React from 'react';

const Review = ({data}) => {
    const {name,photo,comment, place}=data
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                <p>{comment}</p>
                <div className='flex mt-5'>
                    <label tabIndex={0} className="btn btn-primary mr-3 btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt='/' src={photo}/>
                        </div>
                    </label>
                   <div>
                   <h2 className='text-lg font-bold '>{name}</h2>
                    <p className=''> {place}</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Review;