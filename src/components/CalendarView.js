import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { getBookings } from "../api";
import "react-calendar/dist/Calendar.css";

const CalendarView = ({ setSelectedDate }) => {
  const [bookings, setBookings] = useState([]);
  const [selectedDay, setSelectedDay] = useState(new Date());

  const fetchBookings = async (date) => {
    try {
      const response = await getBookings(date);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const formattedDate = selectedDay.toISOString().split("T")[0];
    fetchBookings(formattedDate);

    if (typeof setSelectedDate === "function") {
      setSelectedDate(formattedDate);
    }
  }, [selectedDay, setSelectedDate]); // Now setSelectedDate is safely included

  return (
    <div className="max-w-lg mx-auto bg-white p-4 rounded shadow-md">
      <h3 className="text-lg font-bold mb-4">Available Slots</h3>
      <Calendar
        onChange={setSelectedDay}
        value={selectedDay}
        className="mb-4"
      />
      <ul className="divide-y divide-gray-300">
        {bookings.map((booking) => (
          <li key={booking._id} className="py-2">
            <span>{booking.time}</span> -{" "}
            <span className="text-blue-600">{booking.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarView;


