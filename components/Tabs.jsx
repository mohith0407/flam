"use client";
import { useState } from "react";

const tabs = ["Overview", "Projects", "Feedback"];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return <p>This employee is a top performer with a positive track record and strong collaboration skills.</p>;
      case "Projects":
        return (
          <ul className="list-disc ml-6">
            <li>Project A: Internal HR System</li>
            <li>Project B: Employee Engagement App</li>
          </ul>
        );
      case "Feedback":
        return (
          <form className="flex flex-col gap-3">
            <textarea placeholder="Write feedback..." className="p-2 border rounded" />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit Feedback
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-3 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-gray-50 border p-4 rounded-xl text-sm text-gray-800">
        {renderContent()}
      </div>
    </div>
  );
}
