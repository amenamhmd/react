import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function changeOpen() {
    setOpen(!open);
  }

  return (
    <nav className='bg-[#2C3E50] shadow py-4 px-4 sm:px-0'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">

          <div className="lg:hidden order-first" onClick={changeOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="size-6 cursor-pointer text-white">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>

          <h2 className="no-underline text-white">
            <Link className='text-white' to={'/'} style={{ textDecoration: "none" }}>
              START FRAMEWORK
            </Link>
          </h2>

          <div className="list no-underline order-last lg:order-none">
            <ul className='hidden lg:flex gap-4 pt-2'>
              <li className='text-1xl text-white'>
                <NavLink
                  to={'/'}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    backgroundColor: isActive ? '#1ABC9C' : 'transparent',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '6px'
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className='text-1xl text-white'>
                <NavLink
                  to={'/about'}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    backgroundColor: isActive ? '#1ABC9C' : 'transparent',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '6px'
                  })}
                >
                  About
                </NavLink>
              </li>
              <li className='text-1xl text-white'>
                <NavLink
                  to={'/gallery'}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    backgroundColor: isActive ? '#1ABC9C' : 'transparent',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '6px'
                  })}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className='text-1xl text-white'>
                <NavLink
                  to={'/contacts'}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    backgroundColor: isActive ? '#1ABC9C' : 'transparent',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '6px'
                  })}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {open && (
          <ul className='space-y-2 mt-2 lg:hidden text-2xl'>
            <li>
              <NavLink
                to={'/'}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  backgroundColor: isActive ? '#1ABC9C' : 'transparent',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '6px'
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/about'}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  backgroundColor: isActive ? '#1ABC9C' : 'transparent',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '6px'
                })}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/gallery'}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  backgroundColor: isActive ? '#1ABC9C' : 'transparent',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '6px'
                })}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/contacts'}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  backgroundColor: isActive ? '#1ABC9C' : 'transparent',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '6px'
                })}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}
