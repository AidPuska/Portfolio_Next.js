import { motion } from "framer-motion"
import desc from '../assets/desc.svg'
import title from '../assets/title.svg'
import { InView } from "react-intersection-observer"
import { projects } from "../utils/data"
import { useState } from "react"
import { RemoveScroll } from "react-remove-scroll"
import on from '../assets/on.png'
import off from '../assets/off.png'
import Image from "next/image"


const Projects = ({ forwardedRef, changeStyle, setChangeStyle }) => {

    const [open, setOpen] = useState(false)
    const [order, setOrder] = useState(null)

    const handleClick = (i) => {
        setOrder(i)
        setOpen(!open)
        forwardedRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    const handleClose = () => {
        setOrder(null)
    }

    const handleChange = () => {
        setChangeStyle(!changeStyle)
    }

    return (
        <div ref={forwardedRef} className="w-full relative h-fit flex items-center back justify-center">
            <div className="md:flex flex-wrap justify-evenly mx-2 relative">

                {changeStyle
                    ?
                    <div className='absolute top-2 right-5 flex gap-2 items-center'>
                        <p>Change projects style: </p>
                        <Image
                            className='w-8 h-8 object-cover cursor-pointer'
                            onClick={handleChange}
                            src={on}
                            width={32}
                            height={32}
                            alt='Project on/off'
                        />
                    </div>
                    :
                    <div className='absolute top-2 right-5 flex gap-2 items-center'>
                        <p>Change projects style: </p>
                        <Image
                            className='w-8 h-8 object-cover cursor-pointer'
                            onClick={handleChange}
                            src={off}
                            alt='Project on/off'
                        />
                    </div>
                }

                {projects.map((project, index) => (
                    <InView>
                        {({ ref, inView }) => (
                           <motion.div
                           ref={ref}
                           key={index}
                           className="shadow-md bg-white shadow-black/50 rounded-sm flex flex-col items-center mx-0 md:mx-6 my-16 p-4 gap-4 border-black"
                       >
                           <motion.p className="text-2xl w-full text-center font-medium border-bot border bg-green-500 p-1 border-green-800 flex items-center justify-center"><img src={title} className='w-4 h-4' alt="" />{project.name}</motion.p>
                           <motion.p className="text-lg font-light text-center w-[300px] md:w-[360px] flex items-center"><img src={desc} className='w-4 h-4' alt="" />{project.desc}</motion.p>

                       <div className="relative w-[300px] md:w-[365px] h-52 md:h-[300px]">
                           <Image
                               onClick={() => handleClick(index)}
                               className="w-[300px] md:w-[365px] h-52 md:h-[300px] 
                               border border-green-800 rounded object-cover"
                               src={project.img}
                               fill
                               quality={100}
                               alt='project_image'
                               />
                       </div>


                           <motion.p className="w-[300px] md:w-[350px]">Made with: {project.madeWith}</motion.p>
                           <motion.a href={project.link} target="_blank" rel="noopener noreferrer" className="w-[300px] md:w-[350px] text-green-600">{project.link}</motion.a>
                       </motion.div>  
                        )}
                    </InView>
                ))}
            </div>
        </div>
    )
}

export default Projects