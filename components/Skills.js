import Image from 'next/image'
import React from 'react'
import Skill from './Skill'
import { skills } from '@/utils/data'

const Skills = ({forwardedRef}) => {
    return (
        <div ref={forwardedRef} className='flex flex-col gap-5 items-center 
        justify-center shadow-2xl shadow-black bg-gray-100 pt-5'>

            <h1 className='text-[25px]'>Skills: </h1>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-10 p-5'>
                {skills.map(skill => (
                    <Skill name={skill.name} iconUrl={skill.icon} />
                ))}
            </div>


        </div>
    )
}

export default Skills