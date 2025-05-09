import React, { useState } from 'react';

const MarketRate = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [farmingType, setFarmingType] = useState('');
  const [crop, setCrop] = useState('');
  const [taluka, setTaluka] = useState('');

  const states = {
    Maharashtra: ['Pune', 'Mumbai', 'Nagpur'],
    Karnataka: ['Bangalore', 'Mysore', 'Hubli'],
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara'],
  };

  const farmingTypes = {
    Crop: ['Wheat', 'Rice', 'Maize'],
    Dairy: ['Milk', 'Cheese', 'Butter'],
    Poultry: ['Chicken', 'Eggs'],
  };

  const talukas = {
    Pune: ['Haveli', 'Mulshi', 'Baramati'],
    Mumbai: ['Andheri', 'Borivali', 'Dadar'],
    Nagpur: ['Kamptee', 'Hingna', 'Katol'],
    Bangalore: ['Yelahanka', 'Whitefield', 'Jayanagar'],
    Mysore: ['Nanjangud', 'Hunsur', 'Tirumakudalu'],
    Hubli: ['Navanagar', 'Vidyanagar', 'Gokul'],
    Ahmedabad: ['Daskroi', 'Sanand', 'Bavla'],
    Surat: ['Kamrej', 'Olpad', 'Choryasi'],
    Vadodara: ['Padra', 'Savli', 'Karjan'],
  };

  return (
    <>
      <div className="min-h-[calc(100vh-128px)] flex items-center justify-center py-8 bg-green-50">
        <div className="bg-white border border-gray-300 rounded-3xl p-10 w-[90%] max-w-4xl shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-gray-800 text-2xl font-semibold">Market Rate Search</h2>
            <a href='/user/bookmark'
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Bookmark
            </a>
          </div>
          {/* Land Information Box */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Land Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* State Dropdown */}
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">State</label>
                <select
                  className="bg-white border border-gray-300 rounded-md text-gray-700 p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                    setDistrict('');
                  }}
                >
                  <option value="">Select State</option>
                  {Object.keys(states).map((stateName) => (
                    <option key={stateName} value={stateName}>
                      {stateName}
                    </option>
                  ))}
                </select>
              </div>

              {/* District Dropdown */}
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">District</label>
                <select
                  className="bg-white border border-gray-300 rounded-md text-gray-700 p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  disabled={!state}
                >
                  <option value="">Select District</option>
                  {state &&
                    states[state].map((districtName) => (
                      <option key={districtName} value={districtName}>
                        {districtName}
                      </option>
                    ))}
                </select>
              </div>

              {/* Taluka Dropdown */}
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">Taluka</label>
                <select
                  className="bg-white border border-gray-300 rounded-md text-gray-700 p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  value={taluka}
                  onChange={(e) => setTaluka(e.target.value)}
                  disabled={!state || !district}
                >
                  <option value="">Select Taluka</option>
                  {district &&
                    talukas[district]?.map((talukaName) => (
                      <option key={talukaName} value={talukaName}>
                        {talukaName}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          {/* Growing Crop Box */}
          <div
            className={`${
              !state || !district || !taluka ? 'bg-gray-300' : 'bg-gray-100'
            } border border-gray-300 rounded-lg p-6`}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Growing Crop</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Type of Farming Dropdown */}
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">Type of Farming</label>
                <select
                  className="bg-white border border-gray-300 rounded-md text-gray-700 p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  value={farmingType}
                  onChange={(e) => {
                    setFarmingType(e.target.value);
                    setCrop('');
                  }}
                  disabled={!state || !district || !taluka}
                >
                  <option value="">Select Type of Farming</option>
                  {Object.keys(farmingTypes).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Crop Dropdown */}
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">Crop</label>
                <select
                  className="bg-white border border-gray-300 rounded-md text-gray-700 p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  value={crop}
                  onChange={(e) => setCrop(e.target.value)}
                  disabled={!farmingType}
                >
                  <option value="">Select Crop</option>
                  {farmingType &&
                    farmingTypes[farmingType].map((cropName) => (
                      <option key={cropName} value={cropName}>
                        {cropName}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center mt-8">
            <a
              href="market-rate-result"
              className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition"
              disabled={!state || !district || !farmingType || !crop}
            >
              Search
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketRate;