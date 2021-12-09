import * as React from "react"

import "./Layout.css"
import Navbar from "../Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
