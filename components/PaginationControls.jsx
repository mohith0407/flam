// components/PaginationControls.jsx
"use client";

export default function PaginationControls({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 disabled:opacity-50"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, idx) => {
        const pageNum = idx + 1;
        return (
          <button
            key={pageNum}
            onClick={() => setCurrentPage(pageNum)}
            className={`px-3 py-1 rounded-md border ${
              currentPage === pageNum
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800"
            }`}
            aria-label={`Go to page ${pageNum}`}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
