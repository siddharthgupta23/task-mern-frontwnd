import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Simulate API call for signup
      await fetch("https://task-mern-backend-xfpx.onrender.com/api/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      alert("Signup successful!");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      alert("Signup failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSignup}>
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-2 border rounded mb-4"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-2 border rounded mb-4"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label className="block mb-2">Password</label>
        <input
          type="password"
          name="password"
          className="w-full p-2 border rounded mb-4"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

