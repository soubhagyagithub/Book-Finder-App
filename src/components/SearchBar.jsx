import React from 'react';

export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <form onSubmit={onSearch} className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books by title..."
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 transition-colors duration-200 ease-in-out w-full sm:w-auto"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 w-full sm:w-auto"
        disabled={!query.trim()}
      >
        Search
      </button>
    </form>
  );
}