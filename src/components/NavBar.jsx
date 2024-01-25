import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";



const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const navItems = [
        {path: "/", title: "Start a search"},
        {path: "/my job", title: "My Job"},
        {path: "/ salary", title: "Salary Estimate"},
        {path: "/post-job", title: "Post A Job"},
    ]
    

  return (
      <header className='container px-4 mx-auto max-w-screen-2xl xl:px-24'>
        <nav className='flex items-center justify-between py-6'>
            <a href="/" className="flex items-center gap-2 text-2xl text-black">
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                >
                    <circle
                        cx="12.0143"
                        cy="12.5243"
                        r="12.0143"
                        fill="#3575E2"
                        fillOpacity="0.4"
                    />
                    <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2"/>

                </svg>{" "}
                <span>Expert job</span>
            </a>

            {/* Nav items for large devices */}
            <ul className='hidden gap-12 md:flex'>
                {navItems.map(({path, title}) => (
                    <li key={path} className='text-base text-primary'>
                        <NavLink
                            to={path}
                            className={({ isActive }) => 
                            isActive ? "active" : "" 
                            }
                        >
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Sign up and Login */}
            <div className='hidden space-x-5 text-base font-medium text-primary lg:block'>
                <Link to="/login" className="px-5 py-2 border rounded">Login</Link>
                <Link to="/sign-up" className="px-5 py-2 text-white bg-blue-600 border rounded" >Sign up</Link>
            </div>


            {/* Mobile Menu */}
            <div className='block md:hidden'>
                <button onClick={handleMenuToggler}>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5 text-primary'/> : <FaBarsStaggered className='w-5 h-5 text-primary'/>
                    }
                </button>
            </div>

        </nav>
      </header>
    
  )
}

export default NavBar
