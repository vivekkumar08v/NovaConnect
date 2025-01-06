import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Consultants from './pages/Consultants'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className=' bg-bg_color min-h-screen flex"'>
      <div className='mx-4 sm:mx-[10%] text-white'>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/consultants'element={<Consultants />} />
        <Route path='/consultants/:speciality'element={<Consultants />} />
        <Route path='/login'element={<Login/>} />
        <Route path='/about'element={<About />} />      
        <Route path='/contact'element={<Contact />} />
        <Route path='/my-profile'element={<MyProfile />} />
        <Route path='/my-appointments'element={<MyAppointments />} />
        <Route path='/appointment/:consId'element={<Appointments />} />
      </Routes>
      <Footer/>
    </div>
    </div>
  )
}

export default App
