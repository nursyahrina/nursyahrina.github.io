import React from 'react'
import { AiFillCode } from 'react-icons/ai'
import HTML from '../assets/icons/html.png'
import CSS from '../assets/icons/css3.png'
import Javascript from '../assets/icons/javascript.png'
import GitHub from '../assets/icons/github.png'
import NodeJS from '../assets/icons/node-js.png'
import ReactIcon from '../assets/icons/react.png'
import PHP from '../assets/icons/php.png'
import CodeIgniter from '../assets/icons/codeigniter.png'
import Laravel from '../assets/icons/laravel.png'
import MySQL from '../assets/icons/mysql.png'
import PostgreSQL from '../assets/icons/postgresql.png'
import MongoDB from '../assets/icons/mongodb.png'
import AWS from '../assets/icons/aws.png'
import Python from '../assets/icons/python.png'
import Tailwind from '../assets/icons/tailwind.png'
import Bootstrap from '../assets/icons/bootstrap.png'

const skills = [ 
  [ 'HTML', HTML ],
  [ 'CSS', CSS ],
  [ 'Javascript', Javascript ],
  [ 'GitHub', GitHub ],
  [ 'NodeJS', NodeJS ], 
  [ 'React', ReactIcon ],
  [ 'PHP', PHP ],
  [ 'CodeIgniter', CodeIgniter ],
  [ 'Laravel', Laravel ],
  [ 'MySQL', MySQL ],
  [ 'PostgreSQL', PostgreSQL ],
  [ 'MongoDB', MongoDB ],
  [ 'AWS', AWS ],
  [ 'Python', Python ],
  [ 'Tailwind', Tailwind ],
  [ 'Bootstrap', Bootstrap ],
];

const Skills = () => {
  return (
    <div name='skills' className='skills w-full min-h-screen bg-[#342c34] text-[#e3dee3]'>
      <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div>
          <h3 className='text-5xl font-bold inline border-b-4 border-[#f3973b]'>
              Skills <AiFillCode className='hidden md:inline mb-6' />
          </h3>
          <p className='py-4'>The technologies I've worked with:</p>
        </div>

        <div className='w-full py-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5 text-center'>
          {skills.map(skill => {
            return (
              <div className='content-item'>
                <img className='w-14 mx-auto' src={ skill[1] } alt="HTML Icon" />
                <p className='my-4'>{skill[0]}</p>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Skills