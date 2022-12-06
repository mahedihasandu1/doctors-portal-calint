import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError()
    return (
        <div className='justify-center items-center mt-44'>
            <p className='text-red-500 text-center font-semibold text-4xl '>Somethings Went Wrong </p>
            <p className='text-red-500 text-center font-semibold text-4xl '>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default DisplayError;