import React from 'react'
import { RiChatSmile3Fill } from 'react-icons/ri'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#342c34] text-[#f6f4f6]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <h1 className='text-5xl font-bold inline border-b-4 border-[#f3973b]'>
              About <RiChatSmile3Fill className='hidden md:inline mb-6' />
          </h1>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <h2>Hi! I'm Nursyahrina,<br />nice to meet you.</h2>
          </div>
          <div>
            <p>I'm currently a final year student at Institut Teknologi Padang, majoring in Informatics Engineering. I'm passionate about data and programming; having intermediate experiences in web-based application development, with focus either on front-end or back-end development; and interested in topics of data science. I'm certified student at Dicoding Academy in Front-End and Back-End Web Developer learning path, also in Machine Learning Developer learning path.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About