// hooks/useSearchFilter.js
import { useState, useMemo } from "react";

export const useSearchFilter = (users = []) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const filteredUsers = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();

    return users.filter((user) => {
      const fullName = `${user.firstName ?? ""} ${user.lastName ?? ""}`.toLowerCase();
      const email = user.email?.toLowerCase() || "";
      const department = user.company?.department || "General";
      const departmentLower = department.toLowerCase();
      const rating = user.rating?.toString(); // ensure it's string for matching

      // Search match
      const matchesSearch =
        fullName.includes(lowerSearch) ||
        email.includes(lowerSearch) ||
        departmentLower.includes(lowerSearch);

      // Department match (exact string match — case sensitive by default)
      const matchesDepartment =
        selectedDepartments.length === 0 ||
        selectedDepartments.includes(department);

      // Rating match (stored as number, compare as string for dropdowns)
      const matchesRating =
        selectedRatings.length === 0 ||
        selectedRatings.includes(rating);

      return matchesSearch && matchesDepartment && matchesRating;
    });
  }, [users, searchTerm, selectedDepartments, selectedRatings]);

  return {
    searchTerm,
    setSearchTerm,
    selectedDepartments,
    setSelectedDepartments,
    selectedRatings,
    setSelectedRatings,
    filteredUsers,
  };
};
