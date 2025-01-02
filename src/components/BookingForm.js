// import React, { useState } from "react";
// import { createBooking } from "../api";

// const BookingForm = ({ fetchBookings }) => {
//   const [formData, setFormData] = useState({
//     date: "",
//     time: "",
//     guests: "",
//     name: "",
//     contact: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createBooking(formData);
//       alert("Booking confirmed!");
//       fetchBookings(formData.date);
//     } catch (error) {
//       alert(error.response?.data?.message || "Error creating booking");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
//     >
//       <h2 className="text-xl font-bold mb-4">Make a Reservation</h2>
//       <input
//         type="date"
//         name="date"
//         value={formData.date}
//         onChange={handleChange}
//         className="border rounded w-full py-2 px-3 mb-4"
//         required
//       />
//       <input
//         type="time"
//         name="time"
//         value={formData.time}
//         onChange={handleChange}
//         className="border rounded w-full py-2 px-3 mb-4"
//         required
//       />
//       <input
//         type="number"
//         name="guests"
//         value={formData.guests}
//         onChange={handleChange}
//         className="border rounded w-full py-2 px-3 mb-4"
//         required
//       />
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         className="border rounded w-full py-2 px-3 mb-4"
//         placeholder="Your Name"
//         required
//       />
//       <input
//         type="text"
//         name="contact"
//         value={formData.contact}
//         onChange={handleChange}
//         className="border rounded w-full py-2 px-3 mb-4"
//         placeholder="Your Contact Info"
//         required
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Book Now
//       </button>
//     </form>
//   );
// };

// export default BookingForm;

// import React, { useState } from "react";
// import { createBooking, checkBooking } from "../api";
// import { useNavigate } from "react-router-dom";

// const BookingForm = ({ fetchBookings }) => {
//   const [formData, setFormData] = useState({
//     date: "",
//     time: "",
//     guests: "",
//     name: "",
//     contact: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const isBooked = await checkBooking(formData.date, formData.time); // API to check booking
//       if (isBooked) {
//         alert("Table is already booked for the selected time. Choose another slot.");
//         navigate("/calendar"); // Redirect to calendar view
//       } else {
//         await createBooking(formData);
//         alert("Booking confirmed!");
//         fetchBookings(formData.date);
//         navigate("/summary"); // Redirect to summary page
//       }
//     } catch (error) {
//       alert("Error creating booking");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
//     >
//       {/* Booking form inputs */}
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Book Now
//       </button>
//     </form>
//   );
// };

// export default BookingForm;
import React, { useState } from "react";
import { createBooking, checkBooking } from "../api";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ fetchBookings }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    contact: "",
  });

  const [error, setError] = useState(""); // To handle and display errors
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear errors on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { date, time, guests, name, contact } = formData;

    // Validate form inputs
    if (!date || !time || !guests || !name || !contact) {
      setError("All fields are required.");
      return;
    }
    if (isNaN(guests) || guests <= 0) {
      setError("Please enter a valid number of guests.");
      return;
    }

    try {
      const isBooked = await checkBooking(date, time);
      if (isBooked) {
        alert("Table is already booked for the selected time. Please choose another slot.");
        navigate("/calendar"); // Redirect to calendar view for alternate slots
      } else {
        await createBooking(formData);
        alert("Booking confirmed!");
        fetchBookings(date); // Refresh bookings for the selected date
        navigate("/summary"); // Redirect to summary page
      }
    } catch (error) {
      console.error("Error during booking:", error);
      setError("An error occurred while processing your booking. Please try again.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Make a Reservation</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>} {/* Error message */}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 mb-4"
          required
        />

        <label className="block mb-2 font-semibold">Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 mb-4"
          required
        />

        <label className="block mb-2 font-semibold">Number of Guests</label>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 mb-4"
          placeholder="Enter number of guests"
          required
        />

        <label className="block mb-2 font-semibold">Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 mb-4"
          placeholder="Enter your name"
          required
        />

        <label className="block mb-2 font-semibold">Contact Information</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 mb-4"
          placeholder="Enter your contact details"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

