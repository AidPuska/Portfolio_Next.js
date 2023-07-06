import Image from 'next/image'
import React from 'react'

const Skill = ({ name, iconUrl }) => {

  return (
    <div className={`flex items-center justify-center 
    gap-5 p-1 shadow-md bg-white hover:scale-105 
    transition-all duration-75 ease-in hover:bg-sky-100/50`}>
        <Image 
            width={35} 
            height={35} 
            src={iconUrl} 
        />
        <p className='text-[15px]'>{name}</p>
    </div>
  )
}

export default Skill