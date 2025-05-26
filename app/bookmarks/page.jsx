"use client";
import { useBookmarks } from "@/hooks/useBookmarks";
import UserCard from "@/components/UserCard";

export default function BookmarksPage() {
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📌 Bookmarked Employees</h1>

      {bookmarks.length === 0 ? (
        <p className="text-gray-600">No bookmarked employees yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onRemoveBookmark={() => removeBookmark(user.id)}
              isBookmarked
            />
          ))}
        </div>
      )}
    </main>
  );
}
