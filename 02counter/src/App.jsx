
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
    // Interview question :  if you create a counter in which you click a button value is inc or dec if I repeat the [ counter + 1 ] several time any effect on the code or our output ?????
    // ANS  : in this function of counter we use a hook know as usestate which make a batch of similar work and pass it so if we write the counter +1 many time it doesn't effect the code . 
    // if he want that setcounter many time so we can use call by value function in the setcounter which can use previous counter and add value in the previous counter .  
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevcounter => prevcounter + 1 )
    setCounter(prevcounter => prevcounter + 1 )
    // setCounter(counter + 1)
    // setCounter(counter + 1)
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
