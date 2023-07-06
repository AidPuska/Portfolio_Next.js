"use client"

import { useEffect, useRef, useState } from "react"
import Footer from "@/components/Footer"
import Intro from "@/components/Intro"
import Projects from "@/components/Projects"
import goUp from '../assets/goup.svg'
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Project from "@/components/Project"
import Image from "next/image"
import S from "@/components/Skills"

const Home = () => {

    useEffect(() => {
    }, [])

    const projectRef = useRef(null)
    const footerRef = useRef(null)
    const skillsRef = useRef(null)

    const [isVisible, setIsVisible] = useState(false)
    const [changeStyle, setChangeStyle] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            console.log(footerRef.current)
        }, 2000)
    }, [])

    const toggle = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }

    }

    const toTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggle)

        return () => {
            window.removeEventListener('scroll', toggle)
        }
    }, [])
    

    return (
        <div>
            <Intro 
              projectRef={projectRef} 
              footerRef={footerRef} 
              skillsRef={skillsRef} 
            />
            {changeStyle
                ?
                <Projects 
                  forwardedRef={projectRef} 
                  setChangeStyle={setChangeStyle} 
                  changeStyle={changeStyle} 
                />
                :
                <Project 
                  forwardedRef={projectRef} 
                  setChangeStyle={setChangeStyle} 
                  changeStyle={changeStyle} 
                />
            }
            <Skills forwardedRef={skillsRef} />
            <Contact />
            <Footer forwardedRef={footerRef} />

            {isVisible && (
                <div 
                  onClick={toTop} 
                  className="fixed bottom-5 md:bottom-1 right-5 
                  md:right-1 cursor-pointer">
                  <Image 
                    className="w-10 h-10"
                    width={40}
                    height={40}
                    src={goUp} 
                    alt="go up" 
                  />
                </div>
              )}
        </div>
    )
}

export default Home