import React from 'react'
import greentick from '../../public/greentickmark.mp4'

const Complete = () => {
    return (
        <>
            <video autoPlay loop className='w-2/4 mx-auto'>
                <source src={greentick} type="video/mp4" />
            </video>
            <p className='text-center text-4xl font-semibold text-lime-600 py-4'>Your form is submitted successfully.</p>
            <div className="text-center py-3">
                <a href="/" className='text-2xl font-bold text-blue-500 underline'>Explore BookMyMovie</a>
            </div>
        </>
    )
}

export default Complete