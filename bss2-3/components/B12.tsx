"use client";
import { useState } from "react";
import moment from "moment";

export default function B12() {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(
    moment().format("DD/MM/YYYY")
  );

  const startDay = currentDate.clone().startOf("month").startOf("week");
  const endDay = currentDate.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");

  const daysArray = [];
  while (day.isBefore(endDay, "day")) {
    daysArray.push(day.add(1, "day").clone());
  }

  const handlePreviousMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, "month"));
  };

  const handleSetDate = () => {
    setCurrentDate(moment());
    setSelectedDate(moment().format("DD/MM/YYYY"));
  };

  return (
    <div className="w-72 p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <button onClick={handlePreviousMonth}>
          <span className="text-gray-600">&#8249;</span>
        </button>
        <span className="font-bold text-lg">
          {currentDate.format("MMMM YYYY")}
        </span>
        <button onClick={handleNextMonth}>
          <span className="text-gray-600">&#8250;</span>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mt-4">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((dayName, index) => (
          <div key={index} className="text-center text-gray-500">
            {dayName}
          </div>
        ))}
        {daysArray.map((day, index) => (
          <div
            key={index}
            className={`text-center p-2 rounded-lg ${
              day.isSame(moment(), "day")
                ? "bg-green-500 text-white"
                : day.isSame(currentDate, "month")
                ? "text-gray-800"
                : "text-gray-400"
            } ${day.isSame(moment(), "day") && "font-bold"}`}
          >
            {day.date()}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
          onClick={() => alert("Canceled")}
        >
          Cancel
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md"
          onClick={handleSetDate}
        >
          Set date
        </button>
      </div>
    </div>
  );
}
