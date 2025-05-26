// components/Filter.jsx
"use client";
export default function Filter({
  departments,
  selectedDepartments,
  setSelectedDepartments,
  selectedRatings,
  setSelectedRatings,
}) {
  const ratings = [1, 2, 3, 4, 5];

  const handleToggle = (value, list, setList) => {
    setList((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {/* Department Filter */}
      <div>
        <h3 className="font-semibold mb-1">Filter by Department:</h3>
        <div className="flex flex-wrap gap-2">
          {departments.map((dep) => (
            <button
              key={dep}
              className={`px-3 py-1 rounded-md border ${
                selectedDepartments.includes(dep)
                  ? "bg-blue-600 text-black"
                    : "bg-white dark:bg-blue-300 dark:text-black"
              }`}
              onClick={() =>
                handleToggle(dep, selectedDepartments, setSelectedDepartments)
              }
            >
              {dep}
            </button>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="font-semibold mb-1">Filter by Rating:</h3>
        <div className="flex flex-wrap gap-2">
          {ratings.map((r) => (
            <button
              key={r}
              className={`px-3 py-1 rounded-md border ${
                selectedRatings.includes(r.toString())
                  ? "bg-yellow-500 text-black"
                  : "bg-blue-300 dark:text-black"
              }`}
              onClick={() =>
                handleToggle(r.toString(), selectedRatings, setSelectedRatings)
              }
            >
              {r}⭐
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
