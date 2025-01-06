import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();

      const handleClick = () => {
    window.open("https://nova-connect-admin.vercel.app/", "_blank");
  };

  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* Left Section */}
            <div>
                <img onClick={()=>navigate('/')} className=' mx-[-20px] mb-5 w-40'src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 leading-6'>At NovaConnect, our vision is to empower businesses by creating seamless and efficient solutions tailored to their unique needs. We aim to bridge the gap between challenges and opportunities, helping you achieve your goals with confidence and ease.</p>
            </div>

            {/* Center Section */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 '>
                    
                    <li className='hover:text-gray-200 cursor-pointer' onClick={()=>navigate('/')}>Home</li>
                    <li className='hover:text-gray-200 cursor-pointer' onClick={()=>handleClick()}>Admin Panel</li>
                    <li className='hover:text-gray-200 cursor-pointer'  onClick={()=>navigate('/about')}>About us</li>
                    <li className='hover:text-gray-200 cursor-pointer'  onClick={()=>navigate('/contact')}>Contact us</li>
                    <li className='hover:text-gray-200 cursor-pointer' >Privacy Policy</li>
                </ul>
            </div>

            {/* Right Section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 '>
                    <li className='hover:text-gray-200 cursor-pointer' >+91-9358909398</li>
                    <li className='hover:text-gray-200 cursor-pointer' >vivek08012003@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            {/* CopyRight Text */}
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ NovaConnect - All Rights Reserved </p>
        </div>
    </div>
  )
}

export default Footer
