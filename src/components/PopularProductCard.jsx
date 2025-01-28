import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full '>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px] border-2 border-transparent hover:border-coral-red rounded-[19px]  shadow-md hover:shadow-lg' />
        <div className='flex mt-8 justify-start gap-2.5 pr-2'>
            <img src={star} alt="rating" width={24} height={24} />
            <p className='text-slate-gray font-montserrat leading-normal text-xl'>4.3</p>
        </div>
        <h3 className='mt-2 text-semibold font-palanquin text-2xl leading-normal'>{name}</h3>
        <p className='font-montserrat text-2xl leading-normal text-coral-red'>{price}</p>
    </div>
  )
}

export default PopularProductCard