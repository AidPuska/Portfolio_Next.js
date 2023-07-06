import { motion } from 'framer-motion'
import { useState } from 'react'

const Navbar = ({ projectRef, footerRef, skillsRef }) => {

    const [view, setView] = useState(false)

    const handleClick = async () => {
        setView(!view)
    }

    const goToProjects = () => {
        projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        setView(false)
    }

    const goToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        setView(false)
    }

    const goToSkills = () => {
        skillsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        setView(false)
    }

    return (
        <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, type: 'spring' }} className={"flex bg-green-800/50 mx-5 w-[90%] md:w-[97%] mt-5 absolute top-0 right-0 justify-between items-center"}>
                <motion.p initial={{ x: -200 }} animate={{ x: 0 }} transition={{ delay: 1, type: 'spring' }} className='py-4 px-4 text-[#ffeaee] text-lg ml-2'>Portfolio</motion.p>

                <motion.ul initial={{ x: 400 }} animate={{ x: 0 }} transition={{ delay: 1, type: 'spring' }} class="hidden md:flex flex-row gap-4 py-4 px-4 mr-2">
                    <motion.li onClick={goToProjects} whileHover={{ y: -10, rotate: -10 }} className="text-[#ffeaee] cursor-pointer font-light hover:font-normal hover:border-b hover:border-white">Projects</motion.li>
                    <motion.li onClick={goToSkills} whileHover={{ y: -10, rotate: -10 }} className="text-[#ffeaee] cursor-pointer font-light hover:font-normal hover:border-b hover:border-white">Skills</motion.li>
                    <motion.li onClick={goToFooter} whileHover={{ y: -10, rotate: -10 }} className="text-[#ffeaee] cursor-pointer font-light hover:font-normal hover:border-b hover:border-white">Contact</motion.li>
                </motion.ul>


                <motion.button initial={{ x: 200 }} animate={{ x: 0 }} transition={{ delay: 1, type: 'spring' }} onClick={handleClick} className="md:hidden text-white pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </motion.button>

                {view && <div className='bg-green-600/50 mt-56 absolute rounded right-1 flex justify-center'>
                    <ul class="flex flex-col gap-4 py-4 items-center px-4 md:hidden">
                        <li onClick={goToProjects} className="text-[#ffeaee] hover:font-semibold cursor-pointer">Projects</li>
                        <motion.li onClick={goToSkills} whileHover={{ y: -10, rotate: -10 }} className="text-[#ffeaee] cursor-pointer hover:font-normal hover:border-b hover:border-white">Skills</motion.li>
                        <li onClick={goToFooter} className="text-[#ffeaee] hover:font-semibold cursor-pointer">Contact</li>
                    </ul>
                </div>}
            </motion.div>
        </div>
    )
}

export default Navbar