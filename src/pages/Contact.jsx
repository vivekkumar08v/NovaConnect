import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 '>
        <p>CONTACT <span className='font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] 'src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg'>OUR OFFICE</p>
          <p>282009 Nova Space <br />Suite 350, New Delhi, India</p>
          <p>Phone: +91-9358909398 <br /> Email: vivek08012003@gmail.com</p>
          <p className='font-semibold text-lg'>Careers at NOVACONNECT</p>
          <p>Learn more about our teams and job openings.</p>
          <button className='border border-primary px-8 py-4 text-sm hover:bg-primary hover:text-black transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
