import React from 'react'
import { motion } from "framer-motion"
function Skills() {
  return (
    <div id='Skills' className='flex justify-between md:flex-row flex-col p-10 bg-indigo-600 text-white h-auto'>
       <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{duration:1}}
       className='flex flex-col justify-start items-start'>
           <h1 className='md:text-9xl text-7xl'>SKILLS</h1>
         
       </motion.div>
       <div className='flex flex-col md:justify-between justify-around md:w-8/12 w-full md:mt-0 mt-10'>
         <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{duration:1 ,delay:0.3}}
         className='p-5 bg-white md:m-2 m-2 shadow-md'>
            <h1 className='text-2xl text-indigo-600'>Main</h1>
            <div className='text-black font-bold'>
             HTML CSS JS 
             <br/>
             Tailwind & Boostrap
             <br/>
             React & Redux

            </div>
         </motion.div>
         <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{duration:1 ,delay:0.5}}
         className='p-5 bg-white md:m-2 m-2 shadow-md'>
            <h1 className='text-2xl text-indigo-600'>Basic</h1>
            <div className='text-black font-bold'>
             Node JS & Express
             <br/>
           Mongo DataBase
             <br/>
         NEXT.JS

            </div>
         </motion.div>
         <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{duration:1 ,delay:0.7}}
         className='p-5 bg-white md:m-2 m-2 shadow-md'>
            <h1 className='text-2xl text-indigo-600'>Tool</h1>
            <div className='text-black font-bold'>
                  GIT & GITHUB
             <br/>
                 VS CODE & POSTMAN
             <br/>
                 FIGMA & ADOBE XD

            </div>
         </motion.div>
       </div>
   </div>
  )
}

export default Skills