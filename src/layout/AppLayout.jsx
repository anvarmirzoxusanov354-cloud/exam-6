import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import AppFooter from './AppFooter'

const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <AppFooter/>
    </>
  )
}

export default AppLayout
