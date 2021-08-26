import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.svg'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        {/* header */}
        <div className="nav-header">
          <Link to="/" className="nav-log">
            <img src={logo} alt="MDX Logo" />
          </Link>
          <button className="toggle-btn">
            <FaBars />
          </button>
        </div>

        {/* links */}
        <Links styleClass="nav-links" />
        <SocialLinks styleClass="nav-icons" />
      </div>
    </nav>
  )
}

export default Navbar
