// import axios from "axios";

// const API_URL = "http://localhost:5001/api";

// export const createBooking = (bookingData) => axios.post(`${API_URL}/bookings`, bookingData);
// export const getBookings = (date) => axios.get(`${API_URL}/bookings?date=${date}`);
// export const deleteBooking = (id) => axios.delete(`${API_URL}/bookings/${id}`);
// export const checkBooking =(date, time) => {
// axios.get(`${API_URL}/bookings/check`, {
//       params: { date, time },
//     });
//     return response.data.isBooked; 
//   };

import axios from "axios";

const API_URL = "https://task-mern-backend-xfpx.onrender.com/api"; // Replace with your backend API URL

export const checkBooking = async (date, time) => {
  try {
    const response = await axios.get(`${API_URL}/bookings/check`, {
      params: { date, time },
    });
    return response.data.isBooked; // Returns true if the booking exists, otherwise false
  } catch (error) {
    console.error("Error checking booking:", error.response?.data || error.message);
    throw error; // Throwing the error so it can be caught in the calling code
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await axios.post(`${API_URL}/bookings`, bookingData);
    return response.data; // Returns a success message or other relevant data
  } catch (error) {
    console.error("Error creating booking:", error.response?.data || error.message);
    throw error; // Throwing the error so it can be caught in the calling code
  }
};
export const getBookings = async (date) => {
    try {
      const response = await axios.get(`${API_URL}/bookings`, {
        params: { date },
      });
      return response.data; // Returns the list of bookings for the specified date
    } catch (error) {
      console.error("Error fetching bookings:", error.response?.data || error.message);
      throw error; // Throwing the error so it can be caught in the calling code
    }
  };
  
  export const deleteBooking = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/bookings/${id}`);
      return response.data; // Returns a success message or other relevant data
    } catch (error) {
      console.error("Error deleting booking:", error.response?.data || error.message);
      throw error; // Throwing the error so it can be caught in the calling code
    }
  };
