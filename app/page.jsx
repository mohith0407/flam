"use client";

import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";
import Search from "@/components/Search";
import Filter from "@/components/Filter";
import { useSearchFilter } from "@/hooks/useSearchFilter";
import {fetchUsers} from "@/lib/api";
export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const {
    searchTerm,
    setSearchTerm,
    selectedDepartments,
    setSelectedDepartments,
    selectedRatings,
    setSelectedRatings,
    filteredUsers,
  } = useSearchFilter(users);

  useEffect(() => {
  const loadUsers = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };

  loadUsers();
}, []);
  const departments = [...new Set(users.map((u) => u.company?.department))];

  return (
    <div className="space-y-6">
      <Search value={searchTerm} onChange={setSearchTerm} isActive={isSearchActive} setIsActive={setIsSearchActive} />
      {isSearchActive &&  <Filter
        departments={departments}
        selectedDepartments={selectedDepartments}
        setSelectedDepartments={setSelectedDepartments}
        selectedRatings={selectedRatings}
        setSelectedRatings={setSelectedRatings}
      />}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
