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

const icons = [ 
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

function Skills() {
  return (
    <div name='skills' className='bg-[#342c34] text-[#f6f4f6]'>
      <div className='max-w-[1000px] w-full h-full mx-auto p-4 flex flex-col justify-center'>
        <div>
          <h1 className='text-5xl font-bold inline border-b-4 border-[#f3973b]'>
              Experiences <AiFillCode className='hidden md:inline mb-6' />
          </h1>
          <p className='py-4'>The technologies I've worked with:</p>
        </div>

        <div className='w-full py-8 grid grid-cols-3 sm:grid-cols-6 gap-4 text-center'>
          {icons.map(icon => {
            return (
              <div className='skill'>
                <img className='w-16 mx-auto' src={ icon[1] } alt="HTML Icon" />
                <p className='my-4'>{icon[0]}</p>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Skills