// components/Search.jsx
"use client";
export default function Search({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by name, email, or department..."
      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search Users"
    />
  );
}
