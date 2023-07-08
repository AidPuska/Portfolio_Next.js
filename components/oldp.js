import React, { useEffect, useRef, useState } from 'react'
import { projects } from '../utils/data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import outer_link from '../assets/outer_link.png'

const OldP = ({ changeStyle, setChangeStyle, forwardedRef }) => {

    const handleClick = () => {
        setChangeStyle(!changeStyle)
    }

    return (
        <div ref={forwardedRef} className='md:mx-20 relative'>
            {projects.map(project => (
                <motion.article 
                    initial={{ paddingLeft: 0, scale: 1, paddingRight: 0}}
                    whileHover={{paddingLeft: '12%', scale: 0.92, paddingRight: '12%',transition: {duration: 0.5}}}
                    className='md:flex m-5 md:m-10 mt-16 p-10 gap-10 
                    md:even:flex-row-reverse border-b border-black 
                    last-of-type:border-b-0 hover:border hover:border-black group hover:justify-center' 
                    key={project.id}
                >
                    <div className='relative w-full mb-5 md:mb-0 px-2 md:px-0 h-[400px] md:w-[400px] md:h-[480px]'>
                        <span className='bg-green-600 w-[300px] px-2 md:px-0 rounded-md h-[400px] 
                        md:w-[400px] md:h-[480px] absolute top-2 md:top-3 right-0 md:right-3 
                        -z-10 group-hover:opacity-0 transition ease-in-out duration-300'>
                            {/*  */}
                        </span>
                        <Image 
                            className='w-full px-2 md:px-0 h-[400px] md:w-[400px] md:h-[480px] 
                            object-cover rounded-xl md:border-2 border-green-900' 
                            src={project.img} 
                            alt="Project main" 
                            fill
                            quality={100}
                        />
                    </div>

                    <div className='py-8 md:p-10 space-y-5 flex flex-col justify-between mr-10 text-white 
                    bg-green-800 w-full m-2 md:px-5 items-center md:w-fit rounded-md'>
                        <h1 className='text-2xl font-medium md:font-semibold md:text-3xl'>{project.name}</h1>
                        <p className='font-light w-[250px] md:w-80 py-5 tracking-wide leading-loose text-justify first-letter:text-2xl md:first-letter:text-3xl first-letter:font-md first-letter:mr-2'>{project.desc}</p>
                        <div>
                            <p className='pb-10 w-[250px] md:w-[335px] text-sm text-white'>Made with: {project.madeWith}</p>
                            <a 
                                href={project.link} 
                                target='_blank' 
                                rel="noreferrer" 
                                className='text-sm md:text-base underline cursor-pointer text-black bg-white p-2 
                                rounded shadow shadow-black flex gap-2 justify-around'
                                >
                                {project.link}
                                <Image 
                                    src={outer_link}
                                    width={20}
                                    height={20}
                                    quality={100}
                                    alt='outer link icon'
                                    />
                            </a>
                        </div>
                    </div>
                </motion.article>
            ))}
        </div>
    )
}

export default OldP


