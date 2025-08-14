import React from "react";
function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search destinations..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full p-3 rounded-full border-2 border-pink-200 focus:border-cyan-400 focus:ring focus:ring-pink-100 transition mb-4 shadow-sm"
      aria-label="Search destinations"
    />
  );
}
export default SearchBar;