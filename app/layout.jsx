import './globals.css'
import { ThemeProvider } from "@/context/ThemeContext";
import { BookmarksProvider } from "@/hooks/useBookmarks";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#d6f2fd]'>
        <ThemeProvider >
          <BookmarksProvider>
            <Header />
            <main className="pt-20 px-4">{children}</main>
          </BookmarksProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
