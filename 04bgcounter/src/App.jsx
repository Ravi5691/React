import {useState} from 'react'
// always important usestate or another hook from the react

function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-3xl '>
           <button 
           onClick={() => setColor("red")}
           className='outline-none px-4 rounded-full shadow-lg text-white'style={{backgroundColor:"red"} }>
            Red
           </button>
           <button
           onClick={() => setColor("green")}
           className='outline-none px-4 rounded-full shadow-lg text-white'style={{backgroundColor:"green"}}>
            Green
           </button>
           <button
           onClick={() => setColor("blue")}
           className='outline-none px-4 rounded-full shadow-lg text-white'style={{backgroundColor:"blue"} }>
            Blue
           </button>
           <button
           onClick={() => setColor("orange")}
           className='outline-none px-4 rounded-full shadow-lg text-white'style={{backgroundColor:"orange"} }>
            Orange
           </button>
           <button
           onClick={() => setColor("yellow")}
           className='outline-none px-4 rounded-full shadow-lg text-white'style={{backgroundColor:"Yellow"} }>
            Yellow
           </button>
           <button
           onClick={() => setColor("violet")}
           className='outline-none px-4 rounded-full shadow-lg text-white'style={{backgroundColor:"violet"} }>
            Violet
           </button>
           <button
           onClick={() => setColor("pink")}
           className='outline-none px-4 rounded-full shadow-lg text-white'style={{backgroundColor:"pink"} }>
            Pink
           </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
