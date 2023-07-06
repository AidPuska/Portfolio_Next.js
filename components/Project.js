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
        <div ref={forwardedRef} className='md:mx-20 relative'>

            {changeStyle
                ?
                (<div className='absolute top-[-40px] md:top-2 right-5 flex gap-2 items-center'>
                    <p>Change projects style: </p>
                    <Image 
                        className='w-8 h-8 object-cover cursor-pointer' 
                        onClick={handleClick} 
                        src={on} 
                        width={32}
                        height={32}
                        alt='Project on/off' 
                    />
                </div>)
                :
                (<div className='absolute top-[-40px] md:top-2 right-5 flex gap-2 items-center'>
                    <p>Change projects style: </p>
                    <Image 
                        className='w-8 h-8 object-cover cursor-pointer' 
                        onClick={handleClick} 
                        src={off} 
                        width={32}
                        height={32}
                        alt='Project on/off' 
                    />
                </div>)
            }

            {projects.map(project => (
                <article className='md:flex m-5 md:m-10 mt-16 p-10 gap-10 md:odd:flex-row-reverse border-b border-black last-of-type:border-none' key={project.id}>
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
                </article>
            ))}
        </div>
    )
}

export default Project