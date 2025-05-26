import { useMemo } from "react";

export const useFilteredUsers = (users, search, filters) => {
  return useMemo(() => {
    return users.filter((user) => {
      const nameMatch = `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase());

      const emailMatch = user.email.toLowerCase().includes(search.toLowerCase());

      const deptMatch = user.company.department
        .toLowerCase()
        .includes(search.toLowerCase());

      const departmentFilter = filters.departments.length
        ? filters.departments.includes(user.company.department)
        : true;

      const ratingFilter = filters.ratings.length
        ? filters.ratings.includes(user.rating)
        : true;

      return (nameMatch || emailMatch || deptMatch) && departmentFilter && ratingFilter;
    });
  }, [users, search, filters]);
};
