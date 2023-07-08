import React from 'react'
import { projects } from '../utils/data'
import on from '../assets/on.png'
import off from '../assets/off.png'
import Image from 'next/image'

const Project = ({ changeStyle, setChangeStyle, forwardedRef }) => {

    const handleClick = () => {
        setChangeStyle(!changeStyle)
    }

    return (
        <div ref={forwardedRef} className='grid relative grid-cols-1 md:grid-cols-2 justify-items-center gap-y-20 p-20'>

            <h1 className='absolute top-3 font-semibold text-2xl'>Projects: </h1>

            {projects.map(project => (
                <div className="w-[400px] relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image 
                            className="rounded-t-lg h-[200px] object-cover" 
                            src={project.img}   
                            alt="Project image"
                            width={400}
                            quality={100}
                            height={300}  
                            objectFit='cover'
                        />
                    </a>
                    <div className="p-5 space-y-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.desc}</p>
                        <div className='pb-10'>
                            <p className='text-[15px] text-gray-400'>Made with: {project.madeWith}</p>
                            <p className='text-[15px] text-blue-700'>{project.link}</p>
                        </div>
                        <a href="#" className="absolute bottom-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project


{/* <article className='md:flex m-5 md:m-10 mt-16 p-10 gap-10 md:odd:flex-row-reverse border-b border-black last-of-type:border-none' key={project.id}>
                    <div className='relative group w-[300px] h-[400px] md:w-[400px] md:h-[480px]'>
                        <span className='bg-green-600 w-[300px] h-[400px] md:w-[400px] md:h-[480px] absolute top-5 right-3 md:right-5 -z-10 group-hover:hidden transition ease-in-out duration-300'></span>
                        <Image 
                            className='w-[300px] h-[400px] md:w-[400px] md:h-[480px] object-cover' 
                            src={project.img} 
                            alt="Project main" 
                            fill
                            quality={100}
                        />
                    </div>

                    <div className='p-10 space-y-10 mr-10'>
                        <h1 className='font-bold text-2xl'>{project.name}</h1>
                        <p className='font-light w-[250px] md:w-80 py-5 tracking-wide leading-loose text-justify first-letter:text-5xl first-letter:font-bold first-letter:mr-2'>{project.desc}</p>
                        <p className='pb-10 w-[250px] md:w-[335px]'>Made with: {project.madeWith}</p>
                        <a href={project.link} target='_blank' rel="noreferrer" className='underline cursor-pointer text-green-600 decoration-black'>{project.link}</a>
                    </div>
                </article> */}