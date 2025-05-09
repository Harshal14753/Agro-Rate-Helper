import React from 'react';
import { FaSun, FaCloud, FaCloudRain, FaCloudSun, FaCloudShowersHeavy } from 'react-icons/fa';

const WeatherSurvey = () => {
  const generateForecast = () => {
    const today = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const forecast = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const conditionIndex = Math.floor(Math.random() * 5);
      const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy', 'Heavy Rain'];
      forecast.push({
        day: daysOfWeek[date.getDay()],
        date: date.toISOString().split('T')[0], // Format as YYYY-MM-DD
        temperature: `${Math.floor(Math.random() * 10) + 25}°C`, // Random temperature between 25°C and 35°C
        condition: conditions[conditionIndex],
        icon: [
          <FaSun className="text-yellow-500 text-4xl" />,
          <FaCloud className="text-gray-500 text-4xl" />,
          <FaCloudRain className="text-blue-500 text-4xl" />,
          <FaCloudSun className="text-yellow-400 text-4xl" />,
          <FaCloudShowersHeavy className="text-blue-700 text-4xl" />,
        ][conditionIndex],
      });
    }

    return forecast;
  };

  const forecast = generateForecast();

  return (
    <div className="bg-green-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-4xl font-bold text-green-700 text-center mb-6">Weather Survey</h1>
        <p className="text-gray-700 text-center mb-8">
          Stay updated with the latest weather information and forecasts for the upcoming days.
        </p>

        {/* YouTube Video */}
        <div className="mb-8">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/5qap5aO4i9A"
            title="Weather Information"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        {/* Weather Forecast */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Weather Forecast</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {forecast.map((day, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg p-4 shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
              >
                {day.icon}
                <div className="flex flex-col items-center mt-2">
                  <h3 className="text-lg font-bold text-gray-800">{day.day}</h3>
                  <p className="text-gray-600 text-sm">{day.date}</p>
                </div>
                <p className="text-gray-600 mt-2">{day.temperature}</p>
                <p className="text-gray-500">{day.condition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSurvey;