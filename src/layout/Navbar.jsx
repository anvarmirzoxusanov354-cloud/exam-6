import React from 'react'
import logo from "../assets/logo.svg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-[#232536] py-[28px]'>
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between ">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex items-center gap-5'>
                <ul className="flex items-center gap-8">
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `transition duration-200 cursor-pointer ${
          isActive ? "text-white" : "text-gray-400 hover:text-white"
        }`
      }
    >
      Company
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/career"
      className={({ isActive }) =>
        `transition duration-200 cursor-pointer ${
          isActive ? "text-white" : "text-gray-400 hover:text-white"
        }`
      }
    >
      Career
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/blog"
      className={({ isActive }) =>
        `transition duration-200 cursor-pointer ${
          isActive ? "text-white" : "text-gray-400 hover:text-white"
        }`
      }
    >
      Blog
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `transition duration-200 cursor-pointer ${
          isActive ? "text-white" : "text-gray-400 hover:text-white"
        }`
      }
    >
      Contact
    </NavLink>
  </li>
</ul>

<button>
    <a href="#">Clone project</a>
</button>
            </div>
        </div>

    </header>
  )
}

export default Navbar
