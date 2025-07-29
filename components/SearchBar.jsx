'use client';
import { useState, useEffect } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  // Debounce
  useEffect(() => {
    const delay = setTimeout(() => onSearch(query), 300);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <input
      className="border p-2 mb-4 w-full"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
