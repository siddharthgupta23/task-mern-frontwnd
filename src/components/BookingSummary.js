import React from "react";
import { useNavigate } from "react-router-dom";

const BookingSummary = ({ selectedDate }) => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-24 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Booking Confirmation</h2>
      {selectedDate ? (
        <div className="text-gray-700">
          <p className="mb-4">
            Your table has been successfully booked for:
          </p>
          <div className="bg-blue-100 p-4 rounded mb-4">
            <strong>Date: </strong> {selectedDate}
          </div>
          <p className="text-green-600 font-semibold">
            Thank you for booking with us! We look forward to serving you.
          </p>
        </div>
      ) : (
        <p className="text-red-500 text-center">
          No date selected for booking! Please try again.
        </p>
      )}
      <button
        onClick={handleBackToHome}
        className="mt-6 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Back to Home
      </button>
    </div>
  );
};

export default BookingSummary;
