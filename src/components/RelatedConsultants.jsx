import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedConsultants = ({speciality, consId}) => {

    const {consultants} = useContext(AppContext);

    const [relCons, setRelCons] =useState([]);

    const navigate =useNavigate();

    useEffect(()=>{
        if(consultants.length > 0 && speciality){
            const consultantsData = consultants.filter((cons)=> cons.speciality === speciality && cons._id !== consId)
            setRelCons(consultantsData);
        }

    },[consultants,speciality,consId])

  return (
    <div className='flex flex-col items-center gap-4 my-16 md:mx-10'>
    <h1 className='text-3xl font-medium'>Top Consultants to Book</h1>
    <p className='sm:w-1/3 text-center text-sm'>Explore our extensive list of trusted consultants,</p>
    <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
      {
          relCons.slice(0,5).map((item, index)=>(
              <div onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                  <img className='  bg-primary 'src={item.image} alt="" />
                  <div className='p-4'>
                        <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' :'text-gray-300'} `}>
                            <p className={`w-2 h-2 ${item.available ? 'bg-green-500' :'bg-gray-300'} rounded-full`}></p><p>{item.available ? 'Available': 'Not available'}</p>
                        </div>
                      <p className='text-lg font-medium '>{item.name}</p>
                      <p className='text-sm'>{item.speciality}</p>
                  </div>
              </div>         
      ))}
    </div>
    <button onClick={()=>{ navigate('/consultants'); scrollTo(0,0)}} className='bg-primary  text-gray-800 px-12 py-3 rounded-full mt-10'>more</button>
  </div>
  )
}

export default RelatedConsultants
