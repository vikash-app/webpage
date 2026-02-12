import PropTypes from "prop-types";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search destinations..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full p-3 rounded-full border-2 border-pink-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 focus:border-cyan-400 focus:ring focus:ring-pink-100 transition mb-4 shadow-sm"
      aria-label="Search destinations"
    />
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;