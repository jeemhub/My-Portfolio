import React from 'react'
import { motion } from "framer-motion"
function Aboutme() {
    return (
        <div id='About' className='flex justify-between md:flex-row flex-col p-10 bg-indigo-600 text-white h-auto'>
            <div className='flex flex-col justify-start items-start'>
                <motion.dev 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{duration:1}}
                className='md:text-9xl text-7xl'>ABOUT</motion.dev>
      
                <motion.dev
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{duration:1}}
                className='md:text-9xl text-7xl'>ME</motion.dev>
            </div>
            <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{duration:1 ,delay:0.5}}
            className='flex flex-col justify-start  items-start mt-4 '>
                <p className='text-3xl'>
                    I am Jassim , January.2000.20 from Basra Full-Stack developer and Mechatronics Engineer
                </p>
                <p className='text-3xl'> study at middle technical university . My Career started in 2020 .</p>
            </motion.div>
        </div>
    )
}

export default Aboutme