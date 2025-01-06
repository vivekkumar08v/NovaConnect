import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 '>
        <p>ABOUT <span className='text-gray-100 font-medium '>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img  className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-sm text-white'>
          <p>Welcome to NovaConnect, we are your trusted consultants dedicated to delivering innovative solutions that simplify and enhance your business operations. We understand the complexities organizations face in streamlining processes, improving connectivity, and achieving operational excellence.</p>
          <p>NovaConnect is committed to driving success through cutting-edge strategies and technology integration. We continuously strive to elevate our services, aligning with the latest industry advancements to provide unmatched support. Whether you're embarking on a new project or optimizing existing workflows, NovaConnect is here to guide you every step of the way.</p>
          <b className='text-gray-200'>Our Vision</b>
          <p>At NovaConnect, our vision is to empower businesses by creating seamless and efficient solutions tailored to their unique needs. We aim to bridge the gap between challenges and opportunities, helping you achieve your goals with confidence and ease.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
      <p>WHY <span className='text-gray-100 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border border-primary px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-black transition-all duration-300 text-white cursor-pointer'>
          <b>Efficeincy:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border border-primary px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-black transition-all duration-300 text-white cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted industry experts and professionals in your domain.</p>
        </div>
        <div className='border border-primary px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-black transition-all duration-300 text-white cursor-pointer'>
          <b>Personalization</b>
          <p>Tailored recommendations and reminders to help you stay on top of your proffesion.</p>
        </div>
      </div>

    </div>
  )
}

export default About
