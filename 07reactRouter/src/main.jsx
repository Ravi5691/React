import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'

//when we add reactRouter in jsx file We should create the routerprovider tag then add props so it can work .

// Creating the Router
const router = createBrowserRouter([{
  path : '/',
  element : <Layout/>,
  children : [
    {
      path : "home",
      element : <Home/>
    },
    {
      path : "about",
      element : <About/>
    },
    {
      path : "contactUs",
      element : <ContactUs/>
    }
  ]
}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
