import React from 'react'
import { useState } from 'react';
import Logo from '../images/Logo.png'
import DonateUs from '../images/donate.png'
import { FiTrendingUp } from 'react-icons/fi';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { WiDayCloudy } from 'react-icons/wi';
import { GiPlantSeed } from 'react-icons/gi';
import { FaCameraRetro } from 'react-icons/fa';
import { FaCalculator } from 'react-icons/fa';

const boxesData = [
    { title: 'Market Rate', icon: FiTrendingUp, from: 'from-cyan-300', to: 'to-green-400', description: 'Check live market rate', buttonText: 'Market Rate' },
    { title: 'Pharma Rate', icon: BiBarChartAlt2, from: 'from-blue-400', to: 'to-cyan-300', description: 'Find the rate of Medician', buttonText: 'Pharma Rate' },
    { title: 'Weather Survey', icon: WiDayCloudy, from: 'from-purple-300', to: 'to-indigo-400', description: 'Live weather check', buttonText: 'Weather Survey' },
    { title: 'Agro Study', icon: GiPlantSeed, from: 'from-rose-400', to: 'to-pink-300', description: 'Study of the agriculture feild', buttonText: 'Agro Study' },
    { title: 'Crop Photography', icon: FaCameraRetro, from: 'from-yellow-200', to: 'to-amber-300', description: 'Find the disease by taking the photo', buttonText: 'Crop Photography' },
    { title: 'Farmer Calculator', icon: FaCalculator, from: 'from-rose-300', to: 'to-amber-300', description: 'Find the crop profit', buttonText: 'Farmer Calculator' },
  ];


const scanData = [
  { scanner: '', title: '', description: '' },
  { scanner: '', title: '', description: '' }
];

const Home = () => {

    const [openModalNo, setOpenModalNo] = useState(0);

  return (
    <>
        <div className="bg-green-50 flex-1 flex items-center justify-center p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {boxesData.map((box, index) => (
            <a
              key={index}
              href={`/user/${box.title.replace(/\s+/g, '-').toLowerCase()}`}
              className={`bg-gradient-to-br ${box.from} ${box.to} rounded-xl shadow-lg overflow-hidden w-64 flex flex-col justify-between transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl`}>
              <div className="p-6 flex flex-col items-center text-center">
                <box.icon className="w-16 h-16 mb-4" />
                <h2 className="text-md font-bold text-gray-800 mb-2">{box.title}</h2>
                <p className="text-sm text-gray-700">{box.description}</p>
              </div>
              <div className="bg-white text-center py-3">
                <span className="text-black text-lg">{box.buttonText}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white flex flex-col items-center justify-center p-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Scan for PMFBY Apps</h1>

        {/* Cards */}
        <div className="flex gap-8 mb-8 flex-wrap justify-center">

          {/* Card 1 */}
          <div className="border-2 border-green-300 rounded-xl p-6 w-64 flex flex-col items-center hover:shadow-lg transition hover:bg-green-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="Whatsapp Chatbot"
              className="w-20 h-20 mb-4"
            />
            <h2 className="text-xl font-semibold text-green-700 mb-2">Whatsapp Chatbot</h2>
            <button
              onClick={() => setOpenModalNo(1)}
              className="text-blue-800 underline"
            >Click to scan app</button>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-green-300 rounded-xl p-6 w-64 flex flex-col items-center hover:shadow-lg transition hover:bg-green-100">
            <img
              src={Logo}
              alt="ARH App"
              className="rounded-full object-cover w-20 h-20 mb-4"
            />
            <h2 className="text-xl font-semibold text-green-700 mb-2">AIDE App</h2>
            <button
              onClick={() => setOpenModalNo(2)}
              className="text-blue-800 underline"
            >Click to scan app</button>
          </div>

          {/* Modal */}
          {openModalNo != 0 && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-8 relative flex flex-col md:flex-row items-center max-w-3xl mx-4">

                {/* Close Button */}
                <button
                  onClick={() => setOpenModalNo(0)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
                >
                  ×
                </button>

                {/* QR Code */}
                <img
                  src={
                    openModalNo === 1
                      ? "https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_QR_Code.svg"
                      : "https://your-second-app-qr-code-link.com/qr.png"
                  }
                  alt="QR Code"
                  className="w-48 h-48 mb-6 md:mb-0 md:mr-8"
                />

                {/* Text Section */}
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">
                    {openModalNo === 1 ? (
                      <>
                        Whatsapp Chatbot <span className="text-base font-semibold text-blue-700">(For Farmers)</span>
                      </>
                    ) : (
                      <>
                        ARH App <span className="text-base font-semibold text-blue-700">(For Intermediary Enrollment)</span>
                      </>
                    )}
                  </h2>
                  <p className="text-gray-700">
                    {openModalNo === 1
                      ? "PMFBY WhatsApp Bot is developed by DA&FW, GoI to respond to the queries & provide information to Farmers about their insurance policies under PMFBY."
                      : "AIDE App helps intermediaries enroll farmers quickly and accurately under the PMFBY insurance scheme."}
                  </p>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>

      {/* Donate */}
      <div className="bg-white flex flex-col items-center justify-center p-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Donate Farmer Childreen</h1>

        {/* Cards */}
        <div className="flex gap-8 mb-8 flex-wrap justify-center">

          {/* Card 1 */}
          <div className="border-2 border-green-300 rounded-xl p-6 w-64 flex flex-col items-center hover:shadow-lg transition hover:bg-green-100">
            <img
              src={DonateUs}
              alt="Whatsapp Chatbot"
              className="w-36 h-24 mb-4"
            />
            <h2 className="text-xl font-semibold text-green-700 mb-2">Donate Us</h2>
            <button
              className="text-blue-800 underline"
            >Click to donate us</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home