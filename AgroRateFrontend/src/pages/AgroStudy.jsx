import React from 'react';

const AgroStudy = () => {
  const videos = [
    { id: 1, title: 'Introduction to Agro Study', src: '/videos/video1.mp4' },
    { id: 2, title: 'Advanced Farming Techniques', src: '/videos/video2.mp4' },
    { id: 3, title: 'Sustainable Agriculture', src: '/videos/video3.mp4' },
    { id: 3, title: 'Sustainable Agriculture', src: '/videos/video3.mp4' },
    { id: 3, title: 'Sustainable Agriculture', src: '/videos/video3.mp4' },
  ];

  return (
    <div className="bg-green-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-4xl font-bold text-green-700 text-center mb-6">Agro Study</h1>
        <p className="text-gray-700 text-center mb-8">
          Explore videos and resources to enhance your knowledge about agriculture and farming techniques.
        </p>

        {/* Video Section */}
        <div className="bg-gray-100 p-4 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="p-4">
              <video
                controls
                className="w-full h-48 rounded-lg mb-4"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-lg font-bold text-gray-800">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgroStudy;