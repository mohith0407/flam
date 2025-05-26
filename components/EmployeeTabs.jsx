"use client";
import React, { useState } from "react";

export default function EmployeeTabs({ overviewData, projectsData }) {
  const [activeTab, setActiveTab] = useState("overview");

  // Feedback form state
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("5");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!feedback.trim()) newErrors.feedback = "Feedback cannot be empty.";
    if (!rating) newErrors.rating = "Please select a rating.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // TODO: handle submit logic here, e.g., call API or update state
    console.log("Feedback submitted:", { feedback, rating });
    setSubmitted(true);
    setFeedback("");
    setRating("5");
  };

  return (
    <div className="mt-6">
      {/* Tabs */}
      <nav className="flex border-b border-gray-300 dark:border-gray-700">
        {["overview", "projects", "feedback"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 -mb-px font-medium border-b-2 ${
              activeTab === tab
                ? "border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400"
                : "border-transparent text-gray-600 dark:text-gray-400 hover:text-blue-500"
            } focus:outline-none`}
            onClick={() => setActiveTab(tab)}
            aria-selected={activeTab === tab}
            role="tab"
            id={`tab-${tab}`}
            tabIndex={activeTab === tab ? 0 : -1}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <section
        className="mt-4"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
      >
        {activeTab === "overview" && (
          <div>
            <h3 className="font-semibold mb-2">Overview</h3>
            <p>{overviewData || "No overview data available."}</p>
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            <h3 className="font-semibold mb-2">Projects</h3>
            <ul className="list-disc list-inside">
              {(projectsData && projectsData.length > 0) ? (
                projectsData.map((proj, idx) => (
                  <li key={idx}>{proj}</li>
                ))
              ) : (
                <li>No project data available.</li>
              )}
            </ul>
          </div>
        )}

        {activeTab === "feedback" && (
          <form onSubmit={handleSubmit} className="max-w-md">
            {submitted && (
              <p className="mb-4 text-green-600 dark:text-green-400 font-semibold">
                Feedback submitted successfully!
              </p>
            )}

            <div className="mb-4">
              <label htmlFor="feedback" className="block mb-1 font-medium">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.feedback ? "border-red-500" : "border-gray-300"
                } dark:bg-gray-800 dark:text-white dark:border-gray-700`}
                aria-invalid={errors.feedback ? "true" : "false"}
                aria-describedby={errors.feedback ? "feedback-error" : undefined}
              />
              {errors.feedback && (
                <p id="feedback-error" className="text-red-600 text-sm mt-1">
                  {errors.feedback}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="rating" className="block mb-1 font-medium">
                Rating
              </label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.rating ? "border-red-500" : "border-gray-300"
                } dark:bg-gray-800 dark:text-white dark:border-gray-700`}
                aria-invalid={errors.rating ? "true" : "false"}
                aria-describedby={errors.rating ? "rating-error" : undefined}
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
              {errors.rating && (
                <p id="rating-error" className="text-red-600 text-sm mt-1">
                  {errors.rating}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
