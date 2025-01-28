import React from 'react'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What our <span className='text-coral-red'> Customers</span> say?
      </h3>
      <p className='info-text max-w-lg m-auto mt-4 text-center'>
        Here genuine stories from our customers who are satisfied by the exceptional experience with us
      </p>
      <div className='mt-4 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 '>
        {reviews.map((review) => (
          <ReviewCard 
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews