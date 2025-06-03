// components/Search.jsx
"use client";
import { useRef } from "react";
export default function Search({ value, onChange,isActive,setIsActive }) {
  // const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);
  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setTimeout(() => setIsActive(false), 200);
  return (
    <input
      type="text"
      ref={inputRef}
      placeholder="Search by name, email, or department..."
      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
      value={value}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search Users"
    />
  );
}
