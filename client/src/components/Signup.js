// src/components/Signup.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    occupation: "",
    friends: "",
    picturePath: "",
    viewedProfile: 0,
    impressions: 0,
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-blue-500 to-green-400 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Signup</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Occupation</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
            placeholder="Occupation"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
            placeholder="Location"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Picture Path</label>
          <input
            type="text"
            name="picturePath"
            value={formData.picturePath}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:ring-green-500 focus:border-green-500"
            placeholder="Profile Picture Path"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
        >
          Signup
        </button>
        <div>Already have an account? <Link to={"/"} className="hover:underline font-bold">Login</Link> </div>
      </form>
    </div>
  );
}

export default Signup;

