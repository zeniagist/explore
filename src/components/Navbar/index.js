import React, { useState, useEffect } from "react"
import { IconContext } from "react-icons"
import { FaBars, FaTimes } from "react-icons/fa"
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const changeNav = () => {
    if (window.screenY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handleClick = () => setClick(!click)

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])
  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavContainer>
            <NavLogo to="/">
              <NavIcon />
              EXPLORE
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/images">Images</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/destinations">Destinations</NavLinks>
              </NavItem>
            </NavMenu>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
