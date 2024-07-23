import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./components/card'


function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username : "ravinder",
    age : 21 ,
  }
  let newArr = [1,2,3,4,5]

  return (
    //<> this tag is know a fragments . 
     <> 
      <h1 className="bg-green-500 text-black p-4 rounded-xl"> Tail wind test </h1>
      <Card username ="chaiaurcode" btnText = "Information"/>
      <Card username ="coffee with karan" />
    </>
  )
}

export default App
