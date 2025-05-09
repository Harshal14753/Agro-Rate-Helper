import React from 'react';
import Logo2 from '../images/logo2.png'; // Assuming you have a logo image in the images folder
const Login = () => {
  return (
    <>
      <div className="bg-green-50 flex items-center justify-center py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col">

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src={Logo2}
              alt="Logo"
              className="w-20 h-20"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Farmer Login</h2>

          {/* Form */}
          <form className="space-y-4">

            {/* Aadhaar Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Aadhaar Number</label>
              <input
                type="text"
                name="aadhaar"
                pattern="[0-9]{12}"
                maxLength="12"
                placeholder="12-digit Aadhaar number"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Login
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-gray-600">
            <p className="mb-2">
              Don't have an account?{" "}
              <a href="/register" className="text-green-600 font-semibold hover:underline">
                Register
              </a>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;