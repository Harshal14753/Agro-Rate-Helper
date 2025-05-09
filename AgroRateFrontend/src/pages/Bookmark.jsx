import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Bookmark = () => {
    const [activeSection, setActiveSection] = useState('categorical'); // 'categorical' or 'periodic'
    const [dates] = useState(() => {
        const today = new Date();
        return Array.from({ length: 10 }, (_, i) => {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        });
    });

    const cards = [
        { marketName: 'Hinganghat Market', location: 'Wardha, Maharashtra', range: '4500 - 5000', todayRate: 5000, previousRate: 4800 },
        { marketName: 'Pulgaon Market', location: 'Wardha, Maharashtra', range: '4500 - 5000', todayRate: 5000, previousRate: 4800 },
        { marketName: 'Nagpur Market', location: 'Nagpur, Maharashtra', range: '4500 - 5000', todayRate: 4700, previousRate: 4800 },
        { marketName: 'Pune Market', location: 'Pune, Maharashtra', range: '4000 - 4500', todayRate: 4400, previousRate: 4300 },
    ];

    const periodicData = {
        labels: ['6 Days Ago', '5 Days Ago', '4 Days Ago', '3 Days Ago', '2 Days Ago', 'Yesterday'],
        datasets: [
            {
                label: 'Rate',
                data: [4500, 4600, 4300, 4800, 4900, 5000], // Example data
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0, // Set tension to 0 for sharp edges
            },
        ],
    };

    const periodicOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Rate',
                },
            },
        },
    };

    return (
        <>
            <div className="bg-green-50 min-h-[calc(100vh-128px)] flex items-center justify-center py-8">
                <div className="bg-white border border-gray-300 rounded-3xl p-10 w-[90%] max-w-6xl shadow-lg">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-gray-800 text-2xl font-semibold">Bookmarks</h2>
                        <div className="flex space-x-4">
                            <button
                                className={`px-4 py-2 rounded-lg font-semibold ${
                                    activeSection === 'categorical'
                                        ? 'bg-green-600 text-white'
                                        : 'bg-gray-200 text-gray-800'
                                }`}
                                onClick={() => setActiveSection('categorical')}
                            >
                                Categorical
                            </button>
                            <button
                                className={`px-4 py-2 rounded-lg font-semibold ${
                                    activeSection === 'periodic'
                                        ? 'bg-green-600 text-white'
                                        : 'bg-gray-200 text-gray-800'
                                }`}
                                onClick={() => setActiveSection('periodic')}
                            >
                                Periodic
                            </button>
                        </div>
                    </div>

                    {/* Categorical Section */}
                    {activeSection === 'categorical' && (
                        <>
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

                            {/* Cards Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cards.map((card, index) => {
                                    const isRateIncreasing = card.todayRate > card.previousRate;
                                    const rateDifference = card.todayRate - card.previousRate;
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white border border-gray-300 rounded-lg p-6 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                                        >
                                            <h3 className="text-gray-800 text-lg font-semibold mb-2">{card.marketName}</h3>
                                            <p className="text-gray-600 text-sm mb-2">{card.location}</p>
                                            <p className="text-gray-700 mb-2"><span className="font-bold">Range: </span>{card.range}</p>
                                            <div className={`text-xl font-bold ${isRateIncreasing ? 'text-green-600' : 'text-red-600'}`}>
                                                {isRateIncreasing ? `+${rateDifference}` : rateDifference}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}

                    {/* Periodic Section */}
                    {activeSection === 'periodic' && (
                        <div className="mt-6">
                            <Line data={periodicData} options={periodicOptions} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Bookmark;