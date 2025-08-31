import React from 'react';

export default function BookCard({ book }) {
  const coverUrl = book.cover_i 
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
    : 'https://via.placeholder.com/150x200.png?text=No+Cover';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden flex flex-col items-center p-6">
      <img
        src={coverUrl}
        alt={`${book.title} cover`}
        className="w-32 h-48 object-cover rounded-md shadow-md mb-4"
      />
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          by {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
          First published: {book.first_publish_year || "N/A"}
        </p>
      </div>
    </div>
  );
}