
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedConsultants from '../components/RelatedConsultants';
import { toast } from 'react-toastify';
import axios from 'axios';

const Appointments = () => {
  const { consId } = useParams();
  const { consultants, backendUrl, token, getConsultantsData } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const navigate = useNavigate();

  const [consInfo, setConsInfo] = useState(null);
  const [consSlots, setConsSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  // Fetch Consultant Info
  const fetchConsInfo = async () => {
    const consInfo = consultants.find((cons) => cons._id === consId);
    if (consInfo) setConsInfo(consInfo);
  };

  // Get Available Slots
  const getAvailableSlots = async () => {
    if (!consInfo?.slots_booked) {
      console.error('slots_booked is undefined or null');
      return;
    }

    const slots = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      const timeSlots = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const slotDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
        const slotsForDate = consInfo.slots_booked[slotDate] || [];
        const isSlotAvailable = !slotsForDate.includes(formattedTime);

        if (isSlotAvailable) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });
        }
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      slots.push(timeSlots);
    }

    setConsSlots(slots);
  };

  // Book Appointment
  const bookAppointment = async () => {
    if (!token) {
      toast.warn('Login to book appointment');
      return navigate('/login');
    }

    try {
      const date = consSlots[slotIndex][0].datetime;

      const slotDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

      const { data } = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        { consId, slotDate, slotTime },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getConsultantsData();
        navigate('/my-appointments');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  // Fetch Consultant Info on Component Mount
  useEffect(() => {
    fetchConsInfo();
  }, [consultants, consId]);

  // Fetch Slots After Consultant Info is Set
  useEffect(() => {
    if (consInfo) getAvailableSlots();
  }, [consInfo]);

  return (
    consInfo && (
      <div>
        {/* ---------------------Consultant Details------------------------ */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img className="bg-primary w-full sm:max-w-72  rounded-lg" src={consInfo.image} alt="" />
          </div>

          <div className="flex-1 border border-primary rounded-lg p-8 py-7 mx-2 sm:mx-0 mt-[20px] sm:mt-0">
            {/* ---------------------------ConsInfo : name, degree, experience */}
            <p className="flex items-center gap-2 text-2xl font-medium">
              {consInfo.name} <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-200">
              <p>
                {consInfo.degree} - {consInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-gray-800 text-xs rounded-full bg-gray-100">
                {consInfo.experience}
              </button>
            </div>

            {/* ------------------Consultants About */}
            <div className="flex flex-col gap-1 text-sm font-medium text-gray-100 mt-3">
              <p>
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-300 max-w-[700px] mt-1">{consInfo.about}</p>
            </div>
            <p className="text-gray-300 font-medium mt-4">
              Appointment fee: <span className="text-gray-400">₹ {consInfo.fees}</span>
            </p>
          </div>
        </div>

        {/* -----------------Booking Slots---------------- */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-300">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {consSlots.length &&
              consSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  key={index}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index ? 'bg-primary text-black' : 'border border-primary'
                  }`}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {consSlots.length &&
              consSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  key={index}
                  className={`text-sm font-light flex flex-shrink-0 px-5 py-2 my-2 rounded-full cursor-pointer ${
                    item.time === slotTime ? 'bg-primary text-black' : 'border border-primary text-gray-200'
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          <button
            onClick={bookAppointment}
            className="bg-primary text-black text-sm font-light px-14 py-3 rounded-full my-6"
          >
            Book an appointment
          </button>
        </div>

        {/* Listing Related Consultants */}
        <RelatedConsultants consID={consId} speciality={consInfo.speciality} />
      </div>
    )
  );
};

export default Appointments;




// import React, { useContext,useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext';
// import { assets } from '../assets/assets';
// import RelatedConsultants from '../components/RelatedConsultants';
// import {toast} from 'react-toastify'
// import axios from 'axios';

// const Appointments = () => {

//   const {consId} =useParams();
//   const {consultants, backendUrl, token, getConsultantsData} = useContext(AppContext);
//   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

//   const navigate = useNavigate();

//   const [consInfo, setConsInfo] =useState(null);
//   const [consSlots,setConsSlots] = useState[];
//   const [slotIndex, setSlotIndex] =useState(0);
//   const [slotTime, setSlotTime] = useState('');


//   const fetchConsInfo = async() =>{
//     const consInfo = consultants.find(cons =>cons._id ===consId);
//     setConsInfo(consInfo);
//   }



//   const getAvailableSlots =async() => {
//     setConsSlots([])

//     // getting current date

//     let today =new Date();

//     for(let i=0;i<7;i++){
//       // getting index with index
//       let currentDate =new Date(today);
//       currentDate.setDate(today.getDate()+i);

//       // setting end time of the date with index
//       let endTime =new Date();
//       endTime.setDate(today.getDate()+i);
//       endTime.setHours(21,0,0,0);

//       // setting hours
//       if(today.getDate()===currentDate.getDate()){
//         currentDate.setHours(currentDate.getHours()>10? currentDate.getHours() +1 :10);
//         currentDate.setMinutes(currentDate.getMinutes()>30 ?30:0);
//       }
//       else{
//         currentDate.setHours(10);
//         currentDate.setMinutes(0);
//       }

//       let timeSlots =[];

      
//       while(currentDate<endTime) {
//         let formattedTime =currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

//         const slotDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
//         const slotsForDate = consInfo.slots_booked[slotDate] || [];
//         const isSlotAvailable = !slotsForDate.includes(formattedTime);

//         console.log(consInfo)
//         // console.log(consInfo.slots_booked[slotDate].includes(slotTime))
//         // const slotsBooked = consInfo.slots_booked[0];

//         // const isSlotAvailable = consInfo.slots_booked[slotDate] && consInfo.slots_booked[slotDate].includes(slotTime) ? false : true

//         if(isSlotAvailable){
//         // add slot to array 
//         timeSlots.push({
//           datetime: new Date(currentDate),
//           time: formattedTime
//         })

//         }

        
      
//         // Increment current time by 30 minutes
//         currentDate.setMinutes(currentDate.getMinutes() + 30)
//       }
//       setConsSlots(prev => ([...prev, timeSlots]))

//     }
//   }


  
//   const bookAppointment = async () =>{
//     if(!token){
//       toast.warn('Login to book appointment')
//       return navigate('/login')
//     }

//     try {
      
//       const date = consSlots[slotIndex][0].datetime

//       let day = date.getDate()
//       let month = date.getMonth()+1
//       let year = date.getFullYear()

//       const slotDate = day +"-"+month+"-"+year
//       // console.log(slotDate)

//       // console.log({ backendUrl, consId, slotDate, slotTime, token });

//       const {data} =await axios.post(backendUrl + '/api/user/book-appointment', {consId,slotDate,slotTime}, {headers:{token}})

//       if(data.success)
//       {
//         toast.success(data.message)
//         getConsultantsData()
//         navigate('/my-appointments')
//       }
//       else{
//         toast.error(data.message)
//         // console.log(error.message)
//       }

//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   useEffect(()=>{
//     fetchConsInfo();
//   },[consultants, consId])

//   useEffect(()=>{
//     getAvailableSlots();
//   },[consInfo])

//   useEffect(()=>{
//     // console.log(consSlots);
//   },[consSlots])

//   return consInfo &&(
//     <div>
//       {/* ---------------------Consultant Details------------------------ */}
//       <div className='flex flex-col sm:flex-row gap-4'>
//         <div>
//           <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={consInfo.image} alt="" />
//         </div>

//         <div className='flex-1 border border-primary rounded-lg p-8 py-7 mx-2 sm:mx-0 mt-[20px] sm:mt-0'>
//           {/* ---------------------------ConsInfo : name, degree, experience */}
//           <p className='flex items-center gap-2 text-2xl font-medium'>
//             {consInfo.name} <img className='w-5' src={assets.verified_icon} alt="" />
//           </p>
//           <div className='flex items-center gap-2 text-sm mt-1 text-gray-200'>
//             <p>{consInfo.degree} - {consInfo.speciality}</p>
//             <button className='py-0.5 px-2 border text-gray-800 text-xs rounded-full bg-gray-100'>{consInfo.experience}</button>
//           </div>

//           {/* ------------------Consultants About */}
//           <div className='flex flex-col gap-1 text-sm font-medium text-gray-100 mt-3'>
//             <p >
//               About <img src={assets.info_icon} alt="" />
//             </p>
//             <p className='text-sm text-gray-300 max-w-[700px] mt-1'>
//               {consInfo.about}
//             </p>
//           </div>
//           <p className='text-gray-300 font-medium mt-4'>
//             Appointment fee: <span className='text-gray-400'>₹{consInfo.fees}</span>
//           </p>

//         </div>
//       </div>
//           {/* -----------------Booking Slots---------------- */}

//           <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-300'>
//             <p>Booking Slots</p>
//             <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
//               {
//                 consSlots.length && consSlots.map((item, index)=>(
//                   <div onClick={()=> setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index? 'bg-primary text-black': 'border border-primary'}`}> 
//                         <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
//                         <p>{item[0] && item[0].datetime.getDate()}</p>
//                   </div>
//                 ))
//               }
//             </div>
//             <div className='flex items-center gap-3 py-[-200px] w-full overflow-x-scroll mt-4'>
//             {consSlots.length && consSlots[slotIndex].map((item,index)=>(
//               <p onClick={() => setSlotTime(item.time)} key={index} className={`text-sm font-light flex flex-shrink-0 px-5 py-2 my-2 rounded-full cursor-pointer ${item.time === slotTime? 'bg-primary text-black': 'border border-primary text-gray-200'}`}>
//                 {item.time.toLowerCase()}
//               </p>
//             ))}
//             </div>

//             <button onClick={bookAppointment} className='bg-primary text-black text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
           
//           </div>

//           {/* Listing Related Consultants */}
//           <RelatedConsultants consID={consId} speciality={consInfo.speciality} />
          
//     </div>
//   )
// }

// export default Appointments


