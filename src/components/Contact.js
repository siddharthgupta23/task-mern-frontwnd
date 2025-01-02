import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://task-mern-backend-4fsu.onrender.com/api/contact", formData);
      setSuccess("Message sent successfully!");
      setError("");
    } catch (err) {
      setError("Failed to send the message. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-24 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      {success && <p className="text-green-500 mb-4">{success}</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 border rounded mb-4"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-2 border rounded mb-4"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
