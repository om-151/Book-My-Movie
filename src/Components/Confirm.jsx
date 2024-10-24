import React from 'react'
import check from '../../public/check.png'

const Confirm = () => {
    return (
        <>
            <img src={check} alt="checkmark" className='w-32 mx-auto my-5' />
            <p className='text-center text-3xl text-amber-600 font-semibold py-4'>Your ticket is booked successfully.</p>
            <div className="text-center py-3">
                <a href="/" className='text-2xl font-bold text-blue-500 underline'>Explore BookMyMovie</a>
            </div>
        </>
    )
}

export default Confirm