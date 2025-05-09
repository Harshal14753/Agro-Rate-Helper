import React from 'react';

const CropPhotography = () => {
  return (
    <div className="bg-green-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-4xl font-bold text-green-700 text-center mb-6">Crop Photography</h1>
        <p className="text-gray-700 text-center mb-8">
          Upload a photo of your crop to analyze its health and detect potential issues.
        </p>

        {/* Upload Section */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-100">
          <p className="text-gray-600 mb-4">No file selected</p>
          <button
            className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Select Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropPhotography;