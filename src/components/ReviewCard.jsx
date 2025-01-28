import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, feedback, rating}) => {
  return (
    <div className='flex justify-center flex-col items-center'>
        <img src={imgURL} alt="customer" className='rounded-full object-cover w-[128px] h-[120px]' />
        <p className='mt-6 info-text text-center max-w-sm'>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2.5'>
            <img src={star} width={24} height={24} className='object-contain' />
            <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
        </div>
        <h3 className='font-bold text-3xl text-center mt-2 font-palanquin'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard