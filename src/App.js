// import React, { useState, useCallback } from "react";
// import {  Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Login from "./components/login";
// import Signup from "./components/Signup";
// import BookingForm from "./components/BookingForm";
// import CalendarView from "./components/CalendarView";
// import BookingSummary from "./components/BookingSummary";

// const App = () => {
//   const [selectedDate, setSelectedDate] = useState("");
//   const memoizedSetSelectedDate = useCallback((date) => {
//     setSelectedDate(date);
//   }, []);

//   return (
    
//       <div className="min-h-screen bg-gray-100">
//         <Navbar />
//         <div className="p-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route
//               path="/booking"
//               element={<BookingForm fetchBookings={(date) => setSelectedDate(date)} />}
//             />
//             <Route
//               path="/calendar"
//               element={<CalendarView setSelectedDate={memoizedSetSelectedDate} />}
//             />
//             <Route path="/summary" element={<BookingSummary selectedDate={selectedDate} />} />
//           </Routes>
//         </div>
//       </div>
   
//   );
// };

// export default App;

import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/login";
import Signup from "./components/Signup";
import BookingForm from "./components/BookingForm";
import CalendarView from "./components/CalendarView";
import BookingSummary from "./components/BookingSummary";
import Contact from  "./components/Contact"

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");

  // Memoizing the setSelectedDate function to avoid unnecessary re-renders
  const memoizedSetSelectedDate = useCallback((date) => {
    setSelectedDate(date);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Fixed Navbar */}
        <Navbar />
        <div className="p-4">
          {/* Routes for navigation */}
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Login Page */}
            <Route path="/login" element={<Login />} />
               
            <Route path="/contact" element={<Contact />} />
            

            {/* Signup Page */}
            <Route path="/signup" element={<Signup />} />

            {/* Booking Form Page */}
            <Route
              path="/booking"
              element={<BookingForm fetchBookings={(date) => setSelectedDate(date)} />}
            />

            {/* Calendar Page */}
            <Route
              path="/calendar"
              element={<CalendarView setSelectedDate={memoizedSetSelectedDate} />}
            />

            {/* Booking Summary Page */}
            <Route
              path="/summary"
              element={<BookingSummary selectedDate={selectedDate} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;



