import React from 'react';

const Gallery = () => {
  const videos = [
    { id: 1, title: 'How to Use Agro Rate Helper', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 2, title: 'Understanding Features of the Website', src: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' },
    { id: 3, title: 'Benefits of Agro Rate Helper', src: 'https://www.youtube.com/embed/tgbNymZ7vqY' },
    { id: 4, title: 'Step-by-Step Guide for Farmers', src: 'https://www.youtube.com/embed/2Vv-BfVoq4g' },
  ];

  return (
    <>
      <div className="bg-green-50 min-h-screen py-8">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Title */}
          <h1 className="text-4xl font-bold text-green-700 text-center mb-6">Gallery</h1>
          <p className="text-gray-700 text-center mb-8">
            Explore our video tutorials to understand the usage and benefits of Agro Rate Helper.
          </p>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="flex flex-col items-center rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                <iframe
                  width="100%"
                  height="250"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-md"
                ></iframe>
                <h2 className="text-lg font-semibold text-gray-800 mt-4">{video.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;