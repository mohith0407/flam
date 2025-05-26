"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Tabs from "@/components/Tabs";
import { fetchUsers } from "@/lib/api";
const fetchUserById = async (id) => {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const user = await res.json();
  return {
    ...user,
    rating: Math.floor(Math.random() * 5) + 1,
    bio: "A highly motivated and detail-oriented team member with strong communication and technical skills.",
  };
};
const badgeColor = (rating) => {
  if (rating >= 4) return "bg-green-500";
  if (rating === 3) return "bg-yellow-500";
  return "bg-red-500";
};

export default function EmployeeDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserById(id).then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className="p-6 text-lg">Loading...</div>;
  if (!user) return <div className="p-6 text-red-500">User not found.</div>;

  return (
    <main className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100  rounded-2xl p-6 space-y-6">
        {/* 🧑‍💼 Header Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold mb-1 text-black">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-600">{user.company?.department}</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2 items-center">
            {/* ⭐ Rating */}
            <div className="flex text-yellow-500 text-lg">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < user.rating ? "★" : "☆"}</span>
              ))}
            </div>
            <span
              className={`text-white text-sm px-3 py-1 rounded-full ${badgeColor(
                user.rating
              )}`}
            >
              Rating: {user.rating}
            </span>
          </div>
        </div>

       {/* 🧾 Modern Info Grid with #709ff8 background */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-900">
  <div className="bg-[#d6f2fd] rounded-xl p-4 shadow-md">
    <p><strong>Email:</strong> {user.email}</p>
  </div>
  <div className="bg-[#d6f2fd] rounded-xl p-4 shadow-md">
    <p><strong>Phone:</strong> {user.phone}</p>
  </div>
  <div className="bg-[#d6f2fd] rounded-xl p-4 shadow-md">
    <p><strong>Age:</strong> {user.age}</p>
  </div>
  <div className="bg-[#d6f2fd] rounded-xl p-4 shadow-md">
    <p><strong>Department:</strong> {user.company?.department}</p>
  </div>
  <div className="bg-[#d6f2fd] rounded-xl p-4 shadow-md sm:col-span-2">
    <p><strong>Address:</strong> {user.address?.address}, {user.address?.city}</p>
  </div>
</div>

{/* 📄 Bio Section with consistent background */}
<div className="mt-6 bg-[##d6f2fd] rounded-xl p-6 shadow-lg">
  <h3 className="text-lg font-semibold mb-2 text-gray-900">Bio</h3>
  <p className="text-sm leading-relaxed text-gray-800">
    {user.bio}
  </p>
</div>

        {/* 🗂️ Tabbed UI */}
        <Tabs />
      </div>
    </main>
  );
}
