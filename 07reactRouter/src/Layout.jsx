import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// Outlet which we call from react-router-dom where we put the outlet tag only those place is change.
//like we use outlet between the Header and Footer tag so the header and footer are at same place and nothing changes will happen but the outlet is changing according to the user use the site .



function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout