import React from 'react'
import { motion } from "framer-motion"
function Langueges() {
  return (
    <div>
         <div id='Langueges' className='flex justify-between md:flex-row flex-col p-10 text-indigo-600 bg-white h-auto'>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{duration:1}}
            className='flex flex-col justify-start items-start'>
                <h1 className='md:text-9xl text-7xl'>LAN</h1>
                <h1 className='md:text-9xl text-7xl'>GUE</h1>
                <h1 className='md:text-9xl text-7xl'>GES</h1>
            </motion.div>
            <div className=' grid md:grid-cols-3 md:gap-32 grid-col-1 gap-10 mt-10 md:mt-0'>
              <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{duration:1 ,delay:0.3}}
              >
                <h1 className='text-4xl'>ARABIC</h1>
                <p className='text-black'>Mother Langueges</p>
              </motion.div>
              <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{duration:1 ,delay:0.5}}
              >
                <h1 className='text-4xl'>ENGLISH</h1>
                <p className='text-black'>Professional Proficiencys</p>
              </motion.div>
              <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{duration:1 ,delay:0.7}}
              >
                <h1 className='text-4xl'>Turkish</h1>
                <p  className='text-black'>Limited Proficiency</p>
              </motion.div>
              <div>
               
              </div>
              <div>
               
              </div>
            </div>
        </div>
    </div>
  )
}

export default Langueges