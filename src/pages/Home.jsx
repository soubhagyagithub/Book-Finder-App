import React, { useState } from 'react';
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBooks = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }

    setLoading(true);
    setError(null);
    setBooks([]);

    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
      if (!res.ok) {
        throw new Error("Failed to fetch data.");
      }
      const data = await res.json();
      if (data.docs.length === 0) {
        setError("No books found. Please try a different search term.");
      }
      setBooks(data.docs.slice(0, 12));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 text-gray-900 dark:text-white">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center my-12">
          <h1 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">
            Book Finder 📚
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Find and discover books effortlessly.
          </p>
        </header>

        <SearchBar query={query} setQuery={setQuery} onSearch={searchBooks} />

        {loading && (
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 animate-pulse">
            Loading books...
          </p>
        )}
        {error && (
          <p className="text-center text-lg text-red-500 mt-4">{error}</p>
        )}

        {!loading && !error && books.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {books.map((book) => (
              <BookCard key={book.key} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}