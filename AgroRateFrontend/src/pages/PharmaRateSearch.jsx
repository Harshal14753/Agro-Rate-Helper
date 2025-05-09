import React from 'react'
import { FaCamera } from 'react-icons/fa';

const PharmaRateSearch = () => {
  return (
    <>
        <div className="bg-green-50 min-h-screen py-8">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            {/* Title */}
            <h1 className="text-4xl font-bold text-green-700 text-center mb-6">Pharma Rate Search</h1>
            <p className="text-gray-700 text-center mb-8">
                Search for the latest pharma rates in your area.
            </p>
    
            {/* Search Form */}
            <form className="mb-8">
                <div className="flex justify-center items-center">
                    <div className="relative flex-grow max-w-2xl">
                        <input
                            type="text"
                            placeholder="Enter your location"
                            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-green-400 focus:outline-none pr-10"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-green-600"
                        >
                            <FaCamera />
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="ml-4 bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Search
                    </button>
                </div>
            </form>
    
            {/* Results Section */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Search Results</h2>
                {/* Add your search results here */}
            </div>
            </div>
        </div>
    </>
  )
}

export default PharmaRateSearch