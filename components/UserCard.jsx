// "use client";

// import React from "react";
// import { useBookmarks } from "@/hooks/useBookmarks";

// function Star({ filled }) {
//   return (
//     <svg
//       aria-hidden="true"
//       className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
//       fill={filled ? "currentColor" : "none"}
//       stroke="currentColor"
//       strokeWidth="2"
//       viewBox="0 0 24 24"
//       role="img"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//     </svg>
//   );
// }

// export default function UserCard({ user }) {
//   const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();

//   const bookmarked = isBookmarked(user.id);

//   const handleBookmark = () => {
//     if (bookmarked) removeBookmark(user.id);
//     else addBookmark(user);
//   };

//   const stars = Array.from({ length: 5 }, (_, i) => i < 3);
//   const rating=Math.floor(Math.random() * 5) + 1;
//   return (
//     <article
//       tabIndex={0}
//       className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-lg focus:shadow-lg focus:outline-none transition-shadow duration-300"
//       aria-label={`User card for ${user.firstName} ${user.lastName}`}
//     >
//       <header className="mb-4">
//         <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 truncate">
//           {user.firstName} {user.lastName}
//         </h2>
//         <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{user.email}</p>
//         <p className="text-sm text-gray-600 dark:text-gray-300">
//           Age: {user.age} | Department: {user.company?.department || "N/A"}
//         </p>
//       </header>

//       {/* <div className="flex items-center mb-4" aria-label={`Performance rating: ${user.rating} out of 5`}>
//         {stars.map((filled, idx) => (
//           <Star key={idx} filled={filled} />
//         ))}
//       </div> */}
//       <div className="flex gap-1 mt-2 text-yellow-500 text-lg">
//   {[...Array(5)].map((_, i) => (
//     <span key={i}>
//       {i < rating ? "★" : "☆"}
//     </span>
//   ))}
// </div>
//       <div className="mt-auto flex flex-wrap gap-2 justify-center">
//         <button
//           type="button"
//           className="text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
//           aria-label={`View details for ${user.firstName} ${user.lastName}`}
//           onClick={() => window.location.href = `/employee/${user.id}`}
//         >
//           View
//         </button>

//         <button
//           type="button"
//           onClick={handleBookmark}
//           className={`px-3 py-1 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 ${
//             bookmarked
//               ? "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
//               : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500"
//           }`}
//           aria-pressed={bookmarked}
//           aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
//         >
//           {bookmarked ? "Bookmarked" : "Bookmark"}
//         </button>

//         <button
//           type="button"
//           className="px-3 py-1 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//           onClick={() => alert(`Promote action triggered for ${user.firstName} ${user.lastName}`)}
//           aria-label={`Promote ${user.firstName} ${user.lastName}`}
//         >
//           Promote
//         </button>
//       </div>
//     </article>
//   );
// }
"use client";

import React from "react";
import { useBookmarks } from "@/hooks/useBookmarks";
import Link from "next/link";
function Star({ filled }) {
  return (
    <svg
      aria-hidden="true"
      className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export default function UserCard({ user }) {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const bookmarked = isBookmarked(user.id);
  const handleBookmark = () => {
    if (bookmarked) removeBookmark(user.id);
    else addBookmark(user);
  };

  const rating = Math.floor(Math.random() * 5) + 1;

  return (
    
    <article
      tabIndex={0}
      className="bg-[white] shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-lg focus:shadow-lg focus:outline-none transition-shadow duration-300 cursor-pointer"
      aria-label={`User card for ${user.firstName} ${user.lastName}`}
    >
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900 truncate">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-gray-700 truncate">{user.email}</p>
        <p className="text-sm text-gray-700">
          Age: {user.age} | Department: {user.company?.department || "N/A"}
        </p>
      </header>

      {/* Rating stars */}
      <div className="flex gap-1 mt-2 text-yellow-500 text-lg">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 justify-center pt-4 ">
        <button
          type="button"
          className="text-indigo-700 hover: focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded cursor-pointer"
          onClick={() => window.location.href = `/employee/${user.id}`}
          aria-label={`View details for ${user.firstName} ${user.lastName}`}
        >
          View Profile
        </button>

        <button
          type="button"
          onClick={handleBookmark}
          className={`cursor-pointer px-3 py-1 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            bookmarked
              ? "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
              : "bg-white text-gray-800 hover:bg-gray-100 focus:ring-gray-500"
          }`}
          aria-pressed={bookmarked}
          aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          {bookmarked ? "Bookmarked" : "Bookmark"}
        </button>

        <button
          type="button"
          className="px-3 py-1 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => alert(`Promote action triggered for ${user.firstName} ${user.lastName}`)}
          aria-label={`Promote ${user.firstName} ${user.lastName}`}
        >
          Promote
        </button>
      </div>
    </article>
    
  );
}
