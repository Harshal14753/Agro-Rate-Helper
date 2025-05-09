import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div className="bg-green-50 min-h-screen py-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Title */}
          <h1 className="text-4xl font-bold text-green-700 text-center mb-6">About Us</h1>

          {/* Content */}
          <p className="text-gray-700 text-lg mb-4">
            Welcome to <span className="font-semibold text-green-700">Agro Rate Helper</span>, your trusted partner in empowering farmers and promoting sustainable agriculture. Our mission is to provide farmers with the tools, resources, and information they need to thrive in today's competitive agricultural landscape.
          </p>

          <p className="text-gray-700 text-lg mb-4">
            At Agro Rate Helper, we believe in the power of technology and innovation to transform the lives of farmers. Our platform offers a range of services, including crop price updates, farming techniques, government schemes, and much more. We are committed to bridging the gap between farmers and the resources they need to succeed.
          </p>

          <p className="text-gray-700 text-lg mb-4">
            Our team is dedicated to supporting farmers at every step of their journey. Whether you are a small-scale farmer or a large agricultural enterprise, Agro Rate Helper is here to assist you in achieving your goals and maximizing your productivity.
          </p>

          {/* Vision and Mission */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg mb-4">
              To create a sustainable and prosperous agricultural ecosystem where farmers have access to the best resources and opportunities.
            </p>

            <h2 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              To empower farmers with knowledge, technology, and support, enabling them to make informed decisions and achieve long-term success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;