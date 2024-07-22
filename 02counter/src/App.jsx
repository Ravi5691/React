
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   // useState hook is responsible for change the state 
   // counter is variable and setCounter is a function 
   let [counter , setCounter] = useState(15)
   //let counter = 5 

   const addValue = () => {
    counter = counter + 1
    setCounter(counter)
   }

   const removeValue = () => {
     setCounter(counter - 1 )
   }

  return (
     <>
        <h1> chai aur react </h1>
        <h2> Counter value : { counter } </h2>

        <button onClick={addValue} > 
          Add Value </button>
        <br/>
        <button onClick={removeValue}
        > Remove value </button>
     </>
  )
}

export default App
