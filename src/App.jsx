import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState("olive")

  return (
    
    <div>
      
      <div className='w-full h-screen duration-200' 
    style={{backgroundColor:color}}> 
    
      <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-6  '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl'>
          <button 
          onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}}>Red</button>

          <button 
          onClick={()=>setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"blue"}}>blue</button>

          <button 
          onClick={()=>setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"pink"}}>pink</button>

          <button
          onClick={()=>setColor("brown")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"brown"}}>brown</button>

           <button
          onClick={()=>setColor("#FF80ED")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"#FF80ED"}}>Pink Rose</button>
          <button
          onClick={()=>setColor(" #8F83D8")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:" #8F83D8"}}>Lavender Purple</button>
        </div>
        
      </div>
    </div>
    </div>
    
    
    
    
  ) 
}

export default App
