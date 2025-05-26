"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const { darkMode, setDarkMode } = useTheme();

  const isActive = (path) => pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
            href="/"
            className={`text-xl font-bold hover: ${isActive("/") ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300"}`}
          >
            HR Dashboard
          </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/bookmarks"
            className={`font-medium hover: ${isActive("/bookmarks") ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300"}`}
          >
            Bookmarks
          </Link>
          <Link
            href="/analytics"
            className={`font-medium hover: ${isActive("/analytics") ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300"}`}
          >
            Analytics
          </Link>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle Theme"
            className="ml-4 p-2 rounded hover:bg-white-200 dark:hover:bg-white-700"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-white" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
