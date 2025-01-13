import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopConsultants from '../components/TopConsultants'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopConsultants/>
      <Banner/>
    </div>
  )
}

export default Home