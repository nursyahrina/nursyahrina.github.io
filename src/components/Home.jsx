import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#342c34]'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='mb-2 text-[#f3973b]'>Introducing me:</p>
        <h1 className='text-5xl sm:text-7xl font-semibold text-[#e3dee3]'>Nursyahrina</h1>
        <h2 className='text-4xl sm:text-6xl font-semibold text-[#bdb2bd]'>I'm a Web Developer.</h2>
        <p className='max-w-[700px] py-4 text-l text-[#bdb2bd] '>Hi! I'm currently a student at Institut Teknologi Padang, majoring in Informatics Engineering. Interested in topics around Informatics especially data and programming. Certified student at Dicoding Academy in Front-End and Back-End Web Developer learning path, also in Machine Learning Developer learning path.</p>
        <div>
          <button className='group text-[#fffffc] text-sm font-bold border-2 rounded-xl px-6 py-3 my-2 flex items-center hover:bg-[#f3973b] hover:border-[#f3973b]'>View Projects
          <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home