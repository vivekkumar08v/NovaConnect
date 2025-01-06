import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Consultants = () => {

  const {speciality} =useParams();
  const {consultants} = useContext(AppContext);
  const [filterDoc, setFilterDoc] =useState([]);
  const [showFilter, setShowFilter] =useState(false);
  const navigate = useNavigate();


  const applyFIlter =() => {
    if(speciality) {
      setFilterDoc(consultants.filter(cons=> cons.speciality ===speciality));
    }
    else{
      setFilterDoc(consultants);
    }
  }

  useEffect(()=>{
    applyFIlter();
   }, [consultants,speciality])

  return (
    <div>
      <p className=''>Browse through the consultants specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border border-primary rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-black': ''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
        <div className={`flex flex-col gap-4 text-sm ${showFilter ? 'flex' : 'hidden sm:flex'} `}>
          <p onClick={()=> speciality==='Business Strategy'?navigate('/consultants'): navigate('/consultants/Business Strategy')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded transition-all cursor-pointer ${speciality==="Business Strategy"?"bg-primary text-black":""}`}>Business Strategy</p>
          <p onClick={()=> speciality==='Human Resources'?navigate('/consultants'): navigate('/consultants/Human Resources')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded transition-all cursor-pointer ${speciality==="Human Resources"?"bg-primary text-black":""}`}>Human Resources</p>
          <p onClick={()=> speciality==='IT Consulting'?navigate('/consultants'): navigate('/consultants/IT Consulting')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded transition-all cursor-pointer ${speciality==="IT Consulting"?"bg-primary text-black":""}`}>IT Consulting</p>
          <p onClick={()=> speciality==='Financial Planning'?navigate('/consultants'): navigate('/consultants/Financial Planning')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded transition-all cursor-pointer ${speciality==="Financial Planning"?"bg-primary text-black":""}`}>Financial Planning</p>
          <p onClick={()=> speciality==='Marketing Strategy'?navigate('/consultants'): navigate('/consultants/Marketing Strategy')} className={`w-[94vw] whitespace-nowrap sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded transition-all cursor-pointer ${speciality==="Marketing Strategy"?"bg-primary text-black":""}`}>Marketing Strategy</p>
          <p onClick={()=> speciality==='Operations Management'?navigate('/consultants'): navigate('/consultants/Operations Management')} className={`w-[94vw] whitespace-nowrap sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded transition-all cursor-pointer ${speciality==="Operations Management"?"bg-primary text-black":""}`}>Operations Management</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filterDoc.map((item, index)=>(
                <div onClick={()=> navigate(`/appointment/${item._id}`)} key={index} className='border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='  bg-primary 'src={item.image} alt="" />
                    <div className='p-4'>
                        <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' :'text-gray-300'} `}>
                            <p className={`w-2 h-2 ${item.available ? 'bg-green-500' :'bg-gray-300'} rounded-full`}></p><p>{item.available ? 'Available': 'Not available'}</p>
                        </div>
                        <p className='text-lg font-medium '>{item.name}</p>
                        <p className='text-sm'>{item.speciality}</p>
                    </div>
                </div>
        ))
            }
        </div>
      </div>
    </div>
  )
}

export default Consultants
