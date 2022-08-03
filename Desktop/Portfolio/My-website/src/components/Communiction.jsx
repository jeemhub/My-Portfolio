import React from 'react'
import { motion } from "framer-motion"
function Communiction() {
  return (
    <div>
         <div id='Communiction' className='flex justify-between md:flex-row flex-col p-10 bg-indigo-600 text-white h-auto'>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{duration:1}}
            className='flex flex-col justify-start items-start'>
                <h1 className='md:text-9xl text-7xl'>COMM</h1>
                <h1 className='md:text-9xl text-7xl'>UNICT</h1>
                <h1 className='md:text-9xl text-7xl'>ION</h1>
                
            </motion.div>
            <div className=' grid md:grid-cols-3 md:gap-32 grid-col-1 gap-10 mt-10 md:mt-0'>
              <motion.div
               initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{duration:1 ,delay:0.5}}
              >
                <h1 className='text-4xl'>PHONE</h1>
                <p className='text-white'>009647728387628</p>
              </motion.div>
              <motion.div
               initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{duration:1 ,delay:0.5}}
              >
                <h1 className='text-4xl'>EMAIL</h1>
                <p className='text-white'>jassim.jeem@gmail.com</p>
              </motion.div>
              <motion.div
               initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{duration:1 ,delay:0.5}}
              >
                <h1 className='text-4xl'>ADDRESS</h1>
                <p  className='text-white'>Baghdad, Iraq</p>
               
              </motion.div>
             
            </div>
            
        </div>
        <h1 className='w-full bg-black text-xl text-white text-center'>Design & Code By Me</h1>
    </div>
  )
}

export default Communiction