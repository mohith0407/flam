"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Context to provide bookmark state globally
const BookmarksContext = createContext();

export function BookmarksProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("hrdash_bookmarks");
    if (saved) setBookmarks(JSON.parse(saved));
  }, []);

  // Persist bookmarks to localStorage on change
  useEffect(() => {
    localStorage.setItem("hrdash_bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Add a user to bookmarks if not already present
  const addBookmark = (user) => {
    setBookmarks((prev) => {
      if (prev.find((u) => u.id === user.id)) return prev; // prevent duplicates
      return [...prev, user];
    });
  };

  // Remove user by id
  const removeBookmark = (id) => {
    setBookmarks((prev) => prev.filter((u) => u.id !== id));
  };

  // Check if a user is bookmarked by id
  const isBookmarked = (id) => bookmarks.some((u) => u.id === id);

  return (
    <BookmarksContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

// Custom hook to consume bookmark context
export function useBookmarks() {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error("useBookmarks must be used within BookmarksProvider");
  }
  return context;
}
