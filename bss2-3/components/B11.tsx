'use client';
import { useState } from "react";

export default function B11() {
  const [selectedSubject, setSelectedSubject] = useState("HTML");

  const subjects = ["HTML", "CSS", "JavaScript", "NextJS"];

  return (
    <div className="w-64">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
        Môn học
      </label>
      <select
        id="subject"
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
        className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {subjects.map((subject) => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </select>
    </div>
  );
}
