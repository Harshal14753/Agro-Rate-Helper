import React, { useState } from 'react';
import Logo2 from '../images/Logo2.png';
import { saveUser } from '../services/UserService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const Register = () => {

    const [formData, setFormData] = useState({
        fullname: "",
        fatherName: "",
        mobileNo: "",
        alternateMobileNo: "",
        gender: "",
        aadhaarNo: "",
        state: "",
        district: "",
        taluka: "",
        village: "",
        pincode: "",
        farmingType: "",
        password: "",
        confirmPassword: "",
    });

    const [filteredDistricts, setFilteredDistricts] = useState([]);
    const [filteredTalukas, setFilteredTalukas] = useState([]);
    const [filteredVillages, setFilteredVillages] = useState([]);

    const states = {
        Maharashtra: {
            Pune: {
                Taluka1: ["Village1", "Village2"],
                Taluka2: ["Village3", "Village4"],
            },
            Mumbai: {
                Taluka3: ["Village5", "Village6"],
                Taluka4: ["Village7", "Village8"],
            },
        },
        Gujarat: {
            Ahmedabad: {
                Taluka5: ["Village9", "Village10"],
                Taluka6: ["Village11", "Village12"],
            },
        },
    };

    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setFormData({ ...formData, state: selectedState, district: "", taluka: "", village: "" });
        setFilteredDistricts(selectedState ? Object.keys(states[selectedState]) : []);
        setFilteredTalukas([]);
        setFilteredVillages([]);
    };

    const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setFormData({ ...formData, district: selectedDistrict, taluka: "", village: "" });
        setFilteredTalukas(selectedDistrict ? Object.keys(states[formData.state][selectedDistrict]) : []);
        setFilteredVillages([]);
    };

    const handleTalukaChange = (e) => {
        const selectedTaluka = e.target.value;
        setFormData({ ...formData, taluka: selectedTaluka, village: "" });
        setFilteredVillages(selectedTaluka ? states[formData.state][formData.district][selectedTaluka] : []);
    };

    const handleVillageChange = (e) => {
        setFormData({ ...formData, village: e.target.value });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const response = await saveUser(formData);
            navigate("/home")
            toast.success(response.message)
        } catch (error) {
            toast.error("User not created!")
        }
    };

    return (
        <>
            <div className="bg-green-50 flex items-center justify-center min-h-screen py-8">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl flex flex-col">

                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                        <img
                            src={Logo2}
                            alt="Logo"
                            className="w-20 h-20"
                        />
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Farmer Registration</h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                name="fullname"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                value={formData.fullname}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Father's Name */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Father's Name</label>
                            <input
                                type="text"
                                name="fatherName"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                value={formData.fatherName}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Mobile Number */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
                            <input
                                type="tel"
                                name="mobileNo"
                                pattern="[0-9]{10}"
                                placeholder="10-digit number"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                value={formData.mobileNo}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Alternate Mobile Number */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Alternate Mobile Number</label>
                            <input
                                type="tel"
                                name="alternateMobileNo"
                                pattern="[0-9]{10}"
                                placeholder="10-digit number"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                value={formData.alternateMobileNo}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Gender</label>
                            <select
                                name="gender"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Aadhaar Number */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Aadhaar Number</label>
                            <input
                                type="text"
                                name="aadhaarNo"
                                pattern="[0-9]{12}"
                                maxLength="12"
                                placeholder="12-digit Aadhaar number"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                value={formData.aadhaarNo}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Address Section */}
                        <div className="col-span-2 border border-gray-300 rounded-lg p-4 bg-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Address</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* State Dropdown */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">State</label>
                                    <select
                                        name="state"
                                        required
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                        value={formData.state}
                                        onChange={handleStateChange}
                                    >
                                        <option value="">Select State</option>
                                        {Object.keys(states).map((state) => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* District Dropdown */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">District</label>
                                    <select
                                        name="district"
                                        required
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                        value={formData.district}
                                        onChange={handleDistrictChange}
                                        disabled={!formData.state}
                                    >
                                        <option value="">Select District</option>
                                        {filteredDistricts.map((district) => (
                                            <option key={district} value={district}>{district}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Taluka Dropdown */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Taluka</label>
                                    <select
                                        name="taluka"
                                        required
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                        value={formData.taluka}
                                        onChange={handleTalukaChange}
                                        disabled={!formData.district}
                                    >
                                        <option value="">Select Taluka</option>
                                        {filteredTalukas.map((taluka) => (
                                            <option key={taluka} value={taluka}>{taluka}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Village Dropdown */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Village</label>
                                    <select
                                        name="village"
                                        required
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                        value={formData.village}
                                        onChange={handleVillageChange}
                                        disabled={!formData.taluka}
                                    >
                                        <option value="">Select Village</option>
                                        {filteredVillages.map((village) => (
                                            <option key={village} value={village}>{village}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Pincode */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Pincode</label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        required
                                        pattern="[0-9]{6}"
                                        maxLength="6"
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Type of Farming */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Type of Farming</label>
                            <select
                                name="farmingType"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                onChange={handleChange}
                            >
                                <option value="">Select Type of Farming</option>
                                <option value="crop">Crop Farming</option>
                                <option value="dairy">Dairy Farming</option>
                                <option value="poultry">Poultry Farming</option>
                                <option value="horticulture">Horticulture</option>
                                <option value="aquaculture">Aquaculture</option>
                            </select>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Photo (Optional) */}
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-medium mb-1">Photo (Optional)</label>
                            <input
                                type="file"
                                name="photo"
                                accept="image/*"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-2 flex justify-center">
                            <button
                                type="submit"
                                className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition"
                            >
                                Register
                            </button>
                        </div>

                    </form>
                
                    <div className="mt-6 text-center text-gray-600">
                        <p className="mb-2">
                            Already have an account?{" "}
                            <a href="login" className="text-green-600 font-semibold hover:underline">
                                Sign In
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Register;