import React, { useState } from 'react';

const MarketRateResult = () => {
  const [dates] = useState(() => {
    const today = new Date();
    return Array.from({ length: 10 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    });
  });

  const rates = [
    { marketName: 'Hinganghat Market', location: 'Wardha, Maharashtra', range: '4500 - 5000', todayRate: 5000, previousRate: 4800 },
    { marketName: 'Pulgaon Market', location: 'Wardha, Maharashtra', range: '4500 - 5000', todayRate: 4700, previousRate: 4600 },
    { marketName: 'Nagpur Market', location: 'Nagpur, Maharashtra', range: '4000 - 4500', todayRate: 4400, previousRate: 4300 },
  ];

  return (
    <>
      <div className="bg-green-50 min-h-[calc(100vh-128px)] flex items-center justify-center py-8">
        <div className="bg-white border border-gray-300 rounded-3xl p-10 w-[90%] max-w-6xl shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-gray-800 text-2xl font-semibold">Market Rate Results</h2>
          </div>

          {/* Date Buttons */}
          <div className="flex mb-6 overflow-x-auto">
            <div className="flex gap-2 w-full h-12 overflow-x-scroll scrollbar-hide">
              {dates.map((date, index) => (
                <button
                  key={index}
                  className="flex-shrink-0 border border-gray-300 bg-gray-100 rounded-lg px-4 py-2 text-gray-800 shadow-sm hover:bg-gray-300 transition flex items-center justify-center"
                >
                  {index === 0 ? 'Today' : index === 1 ? 'Yesterday' : date}
                </button>
              ))}
            </div>
          </div>

          {/* Rate Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rates.map((rate, index) => {
              const isRateIncreasing = rate.todayRate > rate.previousRate;
              const rateDifference = rate.todayRate - rate.previousRate;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-300 rounded-lg p-6 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <h3 className="text-gray-800 text-lg font-semibold mb-2">{rate.marketName}</h3>
                  <p className="text-gray-600 text-sm mb-2">{rate.location}</p>
                  <p className="text-gray-700 mb-2"><span className="font-bold">Range: </span>{rate.range}</p>
                  <div className={`text-xl font-bold ${isRateIncreasing ? 'text-green-600' : 'text-red-600'}`}>
                    {isRateIncreasing ? `+${rateDifference}` : rateDifference}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketRateResult;