import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function DomElement(){
  return(
    <div>
      <h1>  Custom App | React </h1>
    </div>
  )
}

// capital letter should be noted in case of any function enject in ReactDOM createRoot
// babble or transpiler is used to make written code to his best in background so that it can run .

/*const ReactElement = {
  // if we pass this object in reactDom it doesn't work due to wrong syntax 

  type: 'a',
  props:{
      href:'https://goggle.com',
      target: '_blank'
  },
  children:'click me to visit google'
}*/


const anotherElement = (
  // this object is run when we pass through reactdom 
  <a href="https://google.com" target="_blank"> Visit Google </a>
)

// right method to create object
const reactElement = React.createElement(
  'a' , // name of tag which we want to create
  { href:"https://goggle.com" , target:"_blank" },
  'click me to visit google',
  anotherElement
  // we can't use if else or another expression in this beacause it is a evaluted expression
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
    reactElement

)
