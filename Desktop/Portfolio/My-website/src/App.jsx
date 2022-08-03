import './App.css'
import Home from './components/Home'
import { useState } from 'react'
import { motion } from "framer-motion";
import Aboutme from './components/Aboutme';
import Mygoal from './components/Mygoal';
import Langueges from './components/Langueges';
import Communiction from './components/Communiction';
import Skills from './components/Skills';

function App() {
  const [n, setn] = useState(false);
  const [hov,sethov]=useState(true);
  const bg=(hov)=>{
    if(hov){
      console.log('hi')
      return(`bg-indigo-600`)
    }else{
      return(`bg-black`)
    }
  }
  const nav = (n) => {
    if (n) {
      return (
        //========== Nav ==============
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
     transition={{duration:0.5}}
        className={`flex flex-col justify-center  items-center h-screen w-full ${bg(hov)} transition-all duration-350`}>
         <motion.button
            initial={{opacity:0}}
            animate={{opacity:1}}
         transition={{duration:0.5}} 
         onClick={()=>{setn(!n)}} className='m-3 absolute top-0 right-0 text-white text-6xl'><ion-icon name="close-outline"></ion-icon></motion.button>
        <dev className={`flex flex-col md:flex-row `}>
        <a href='#About' onMouseEnter={()=>sethov(!hov)} onMouseLeave={()=>sethov(!hov)} onClick={()=>{setn(!n);sethov(!hov)}} className={`text-white text-5xl m-6  hover:${bg(hov)} hover:text-indigo-600 transition-all duration-350 `}>ABOUT</a>
        <a href='#MyGoal' onMouseEnter={()=>sethov(!hov)} onMouseLeave={()=>sethov(!hov)} onClick={()=>{setn(!n);sethov(!hov)}} className={`text-white text-5xl m-6 hover:${bg(hov)} hover:text-indigo-600 transition-all duration-350`}>MYGOAL</a>
        <a href='#Skills' onMouseEnter={()=>sethov(!hov)} onMouseLeave={()=>sethov(!hov)} onClick={()=>{setn(!n);sethov(!hov)}} className={`text-white text-5xl m-6 hover:${bg(hov)} hover:text-indigo-600 transition-all duration-350`}>SKILSS</a>
        <a href='#Langueges' onMouseEnter={()=>sethov(!hov)} onMouseLeave={()=>sethov(!hov)} onClick={()=>{setn(!n);sethov(!hov)}} className={`text-white text-5xl m-6 hover:${bg(hov)} hover:text-indigo-600 transition-all duration-350`}>LANGUEGES</a>
        <a href='#MyWork' onMouseEnter={()=>sethov(!hov)} onMouseLeave={()=>sethov(!hov)} onClick={()=>{setn(!n);sethov(!hov)}} className={`text-white text-5xl m-6 hover:${bg(hov)} hover:text-indigo-600 transition-all duration-350`}>MYWORK</a>
        <a href='#Communiction' onMouseEnter={()=>sethov(!hov)} onMouseLeave={()=>sethov(!hov)} onClick={()=>{setn(!n);sethov(!hov)}} className={`text-white text-5xl m-6 hover:${bg(hov)} hover:text-indigo-600 transition-all duration-350`}>COMMUNICTION</a>

        </dev>
        </motion.div>
      )
    } else {
      //================== APP ===================
      return (
        <div>
          <motion.button 
             initial={{opacity:0}}
             animate={{opacity:1}}
          transition={{duration:0.5}}
          onClick={()=>{setn(!n)}} className='m-1 absolute top-0 right-0  text-indigo-600 text-6xl'><ion-icon name="menu-outline"></ion-icon></motion.button>
          <Home/>
          <Aboutme></Aboutme>
          <Mygoal></Mygoal>
          <Skills></Skills>
          <Langueges></Langueges>`
          <Communiction></Communiction>
        </div>
      )
    }
  }
  
  return (
    <div>
      {nav(n)}
    </div>
  )
}

export default App
