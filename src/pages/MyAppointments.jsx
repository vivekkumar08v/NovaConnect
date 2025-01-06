import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const MyAppointments = () => {

  const {backendUrl, token, getConsulantsData} =useContext(AppContext)

  const [appointments, setAppointments] = useState([])

  const navigate = useNavigate()

  const months =["","Jan", "Feb", "Mar","Apr", "May", "Jun","Jul", "Aug","Sep", "Oct", "Nov", "Dec"]

  const slotDateFormat = (slotDate)=>{
    const dateArray = slotDate.split('-')
    return dateArray[0]+" "+months[Number(dateArray[1])]+" "+dateArray[2]
  }

  const getUserAppointments = async()=>{
    try {

      const {data} = await axios.get(backendUrl + '/api/user/appointments', {headers:{token}})

      if(data.success){
        setAppointments(data.appointments.reverse())
        // console.log(data.appointments)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  const cancelAppointment = async(appointmentId) =>{
    try {

      // console.log(appointmentId)
      const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment', {appointmentId}, {headers:{token}})

      if(data.success){
        toast.success(data.message)
        getUserAppointments()
        // getConsulantsData()
      }
      else{
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const initPay = (order) => {

    const options ={
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Appointment Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async(response)=>{
        // console.log(response)

        try {
          
          const {data} = await axios.post(backendUrl + '/api/user/verify-razorpay', response, {headers:{token}})
          if(data.success)
          {
            getUserAppointments()
            navigate('/my-appointments')
          }

        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }      
    }

    if (typeof window.Razorpay === 'undefined') {
      console.error('Razorpay is not loaded');
      return;
    }
    

    const rzp = new window.Razorpay(options)
    rzp.open()

  }

  const appointmentRazorpay = async(appointmentId) => {
    try {
      
      const {data} = await axios.post(backendUrl + '/api/user/payment-razorpay', {appointmentId}, {headers:{token}})

      // console.log(data)
      if(data.success){
        // console.log(data.order)

        initPay(data.order)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  useEffect(()=>{
    if(token){
      getUserAppointments()
    }
  },[token])

  return (
    <div>
      <p className='pb-3 mt-12 fot-medium border-b'>My appointments</p>
      <div>
        {appointments.map((item,index)=>(
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
            <img className='w-32 bg-primary' src={item.consData.image} alt="" />
          </div>
          <div className='flex-1 text-sm '>
            <p className='font-semibold'>{item.consData.name}</p>
            <p>{item.consData.speciality}</p>
            <p className='font-medium mt-1'>Address:</p>
            <p className='text-xs'>{item.consData.address}</p>
            {/* <p className='text-xs'>{item.address.line2}</p> */}
            <p className='text-xs mt-1'><span>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
          </div>
          <div className='flex flex-col gap-2 justify-end'>
            {!item.camcelled && item.payment && !item.isCompleted &&<button className='text-sm text-center sm:min-w-48 py-2 border rounded text-green-600'>Paid</button>}
            {!item.cancelled && !item.payment && !item.isCompleted && <button onClick={()=> appointmentRazorpay(item._id)} className='text-sm text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-black transition-all duration-300'>Pay Online</button>}
            {!item.cancelled && !item.isCompleted && <button onClick={()=>cancelAppointment(item._id)} className='text-sm text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-black transition-all duration-300'>Cancel appointment</button>}  
            {item.cancelled && !item.isCompleted &&<button className='text-sm text-center sm:min-w-48 py-2 border rounded text-red-600' > Appointment cancelled</button>}
            {item.isCompleted && <button className='text-sm text-center sm:min-w-48 py-2 border rounded text-green-600'>Completed</button>}
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
