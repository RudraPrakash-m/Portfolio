import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import CustomCursor from './custom_cursor/CustomCursor'
import ScrollToTop from './scrolltotop/ScrollToTop'

const Layout = () => {
  return (
    <>
    <ScrollToTop/>
    <CustomCursor/>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default Layout