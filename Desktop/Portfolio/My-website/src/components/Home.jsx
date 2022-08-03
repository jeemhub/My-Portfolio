import React from 'react'
import homeimg from '../assets/my-photo.png'
import { motion } from "framer-motion"
function Home(props) {
 
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center pt-40 md:pt-20'>
           
            <motion.img 
                initial={{y:-500}}
                animate={{y:0}}
                transition={{duration:0.5}}
            src={homeimg} 
            alt='' 
            className=' w-2/8 h-1/6  md:w-1/6 md:h-2/6 rounded-full -mt-96 ' 
            />
            <motion.h1 className='text-4xl mt-5 bg-indigo-600 w-full text-center text-white'
              initial={{opacity:0}}
              animate={{opacity:1}}
           transition={{duration:0.5,delay:0.4}} 
            >Jassim Al-Otaibi</motion.h1>
            <motion.p className='mt-3 text-gray-700 text-xl'
              initial={{opacity:0}}
              animate={{opacity:1}}
           transition={{duration:0.5,delay:0.5}} 
            >Full-Stack Developer and UI/UX desginer</motion.p>
            <motion.p className='text-gray-700 text-xl'
              initial={{opacity:0}}
              animate={{opacity:1}}
           transition={{duration:0.5,delay:0.6}} 
            >Help you develop your website</motion.p>
         
            <motion.a 
              initial={{opacity:0}}
              animate={{opacity:1}}
           transition={{duration:0.5,delay:0.7}} 
            href='#Communiction' className='bg-indigo-600 text-white p-5 mt-3 rounded-full hover:bg-white hover:border-2 hover:border-solid hover:border-indigo-600 hover:text-indigo-600'>contact with me</motion.a>
       
        </div>
    )
}

export default Home