import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-green-200 text-black py-8">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="text-2xl font-bold"><span className='text-4xl'>🌾</span > Agro App</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-green-600 transition">Home</a>
              <a href="#" className="hover:text-green-600 transition">About</a>
              <a href="#" className="hover:text-green-600 transition">Services</a>
              <a href="#" className="hover:text-green-600 transition">Contact</a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-green-600 mb-6"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© {new Date().getFullYear()} Agro App. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-green-600">Privacy Policy</a>
              <a href="#" className="hover:text-green-600">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer