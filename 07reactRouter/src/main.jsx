import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Users from './components/Users/Users.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

//when we add reactRouter in jsx file We should create the routerprovider tag then add props so it can work .

// Creating the Router

// Method 1
// const router = createBrowserRouter([{
//   path : '/',
//   element : <Layout/>,
//   children : [
//     {
//       path : "home",
//       element : <Home/>
//     },
//     {
//       path : "about",
//       element : <About/>
//     },
//     {
//       path : "contactUs",
//       element : <ContactUs/>
//     }
//   ]
// }])

// Method 2
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contactUs' element={<ContactUs/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}/>
      <Route
      path='users/:userId' 
      element={<Users/>}/>
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
