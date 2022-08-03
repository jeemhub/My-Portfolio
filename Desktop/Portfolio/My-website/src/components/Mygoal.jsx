import React from 'react'
import { motion } from "framer-motion"
function Mygoal() {
    return (
        <div
     
        id='MyGoal' className='flex justify-between md:flex-row flex-col p-10 text-indigo-600 bg-white h-auto'>
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{duration:1}}
            className='flex flex-col justify-start items-start'>
                <h1 className='md:text-9xl text-7xl'>MY</h1>
      
                <h1 className='md:text-9xl text-7xl'>GOAL</h1>
            </motion.div>
            <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{duration:1 ,delay:0.5}}
            className='flex flex-col justify-start  items-start mt-4 '>
                <p className='text-3xl'>
                My goal is to have works that immortalize me in Iraq in particular 
                </p>
                <p className='text-3xl'> and in the world in general as well, to create ways that facilitate life for all layers of society</p>
            </motion.div>
        </div>
    )
}

export default Mygoal