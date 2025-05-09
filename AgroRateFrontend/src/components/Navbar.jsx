import React from 'react'
import { useState } from 'react';
import Logo from '../images/logo.png'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(true);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <>
        <div className="flex flex-col shadow-md">
                {/* Top White Section */}
                <div className="flex items-center justify-between bg-white p-2">
                  {/* Logo and Titles */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="rounded-full object-cover w-16 h-16"
                    />
                    <div>
                      <h1 className="text-2xl font-bold text-blue-900">Agro Rate Helper</h1>
                      <p className="text-sm text-gray-600">Ministry of Agriculture and Farmers Welfare</p>
                    </div>
                  </div>
        
                  {/* Sign In / Register Buttons */}
                  <div className="flex space-x-2">
                    <a href='/login' className="px-4 py-2 border border-green-500 text-green-800 rounded hover:bg-green-100">
                      Sign In
                    </a>
                    <a href='/register' className="px-4 py-2 bg-lime-400 border border-green-500 text-green-800 rounded hover:bg-lime-500">
                      Register
                    </a>
                  </div>
                </div>
        
                {/* Green Menu Section */}
                <div className="bg-green-700 text-white">
                  <ul className="flex">
                    {['Home', 'Documents', 'Enrollment Partners', 'Related Links', 'Reports', 'Dashboard', 'Gallery', 'About Us'].map((item, idx) => (
                      <li key={idx} className="relative group">
                        <a
                          href={`/${item.replace(/\s+/g, '-').toLowerCase()}`}
                          className="block px-6 py-3 hover:bg-green-600"
                        >
                          {item}
                        </a>

                        {/* Dropdown for specific items */}
                        {['Documents', 'Enrollment Partners', 'Related Links', 'Reports', 'Dashboard'].includes(item) && (
                          <div className="absolute hidden group-hover:block bg-white text-black min-w-[150px] shadow-lg z-10">
                            <a href={`/${item.replace(/\s+/g, '-').toLowerCase()}/option1`} className="block px-4 py-2 hover:bg-gray-100">
                              Option 1
                            </a>
                            <a href={`/${item.replace(/\s+/g, '-').toLowerCase()}/option2`} className="block px-4 py-2 hover:bg-gray-100">
                              Option 2
                            </a>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
    </>
  )
}

export default Navbar