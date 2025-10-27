import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import CustomCursor from './custom_cursor/CustomCursor'

const Layout = () => {
  return (
    <>
    <CustomCursor/>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default Layout