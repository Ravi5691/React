import { useState } from 'react'
import Chai from "./chai"

function App() {
    const username = "chai aur code"
  return (
    // Note : In react jsx can excess one element so we can add different element by creating div or a short method is present by puting <> </> these tag 
    // to inject js variable in html code we use {} bracket 
    //{username} is know as evaluated expression yaha par hamne js nahi lkhe pure yaha par hamne sirf js ka final output lika ha 
    <>
    <h2>Chai banao Bahu . {username}</h2>
    <Chai/>
    <p> Biscuit bhi loge aap sasu maa . </p>
    </>
  )
}

export default App
