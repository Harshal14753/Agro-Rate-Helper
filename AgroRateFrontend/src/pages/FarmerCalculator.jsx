import React, { useState } from 'react';

const FarmerCalculator = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: '',
    workerName: '',
    amountPaid: 0,
    dateOfPayment: '',
    dateOfWork: '',
    remainingAmount: 0,
    investmentAmount: 0,
  });
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);

  const addCategory = () => {
    if (newCategory.name.trim() !== '' && newCategory.amountPaid > 0) {
      setCategories([...categories, { ...newCategory }]);
      setNewCategory({ name: '', workerName: '', amountPaid: 0, dateOfPayment: '', dateOfWork: '', remainingAmount: 0, investmentAmount: 0 });
    }
  };

  const deleteCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
    calculateTotals(updatedCategories);
  };

  const calculateTotals = (updatedCategories) => {
    const total = updatedCategories.reduce((sum, category) => sum + category.investmentAmount, 0);
    setTotalInvestment(total);
    setTotalProfit(total * 1.2); // Assuming 20% profit for simplicity
  };

  return (
    <div className="bg-green-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-4xl font-bold text-green-700 text-center mb-6">Farmer Calculator</h1>
        <p className="text-gray-700 text-center mb-8">
          Manage your farming expenses and calculate profit/loss effectively.
        </p>

        {/* Add Category */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name of the Work</label>
              <input
                type="text"
                placeholder="Name of the Work"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name of the Worker</label>
              <input
                type="text"
                placeholder="Name of the Worker"
                value={newCategory.workerName}
                onChange={(e) => setNewCategory({ ...newCategory, workerName: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Date of Work</label>
              <input
                type="date"
                value={newCategory.dateOfWork}
                onChange={(e) => setNewCategory({ ...newCategory, dateOfWork: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Date of Payment</label>
              <input
                type="date"
                value={newCategory.dateOfPayment}
                onChange={(e) => setNewCategory({ ...newCategory, dateOfPayment: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Amount Paid</label>
              <input
                type="number"
                placeholder="Amount Paid"
                value={newCategory.amountPaid}
                onChange={(e) => setNewCategory({ ...newCategory, amountPaid: parseFloat(e.target.value) || 0 })}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Remaining Amount</label>
              <input
                type="number"
                placeholder="Remaining Amount"
                value={newCategory.remainingAmount}
                onChange={(e) => setNewCategory({ ...newCategory, remainingAmount: parseFloat(e.target.value) || 0 })}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Investment Amount</label>
              <input
                type="number"
                placeholder="Investment Amount"
                value={newCategory.investmentAmount}
                onChange={(e) => setNewCategory({ ...newCategory, investmentAmount: parseFloat(e.target.value) || 0 })}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none w-full"
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={addCategory}
              className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Add
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t-2 border-gray-300 my-8" />

        {/* Categories List */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Categories</h2>
          <div className="grid grid-cols-1 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{category.name}</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => alert('Edit functionality coming soon!')}
                      className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCategory(index)}
                      className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-gray-700"><span className="font-semibold">Worker Name:</span> {category.workerName}</p>
                  <p className="text-gray-700"><span className="font-semibold">Amount Paid:</span> ₹{category.amountPaid.toFixed(2)}</p>
                  <p className="text-gray-700"><span className="font-semibold">Date of Payment:</span> {category.dateOfPayment}</p>
                  <p className="text-gray-700"><span className="font-semibold">Date of Work:</span> {category.dateOfWork}</p>
                  <p className="text-gray-700"><span className="font-semibold">Remaining Amount:</span> ₹{category.remainingAmount.toFixed(2)}</p>
                  <p className="text-gray-700"><span className="font-semibold">Investment Amount:</span> ₹{category.investmentAmount.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Totals */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary</h2>
          <p className="text-gray-700 mb-2">Total Investment: ₹{totalInvestment.toFixed(2)}</p>
          <p className="text-gray-700">Estimated Profit: ₹{totalProfit.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default FarmerCalculator;