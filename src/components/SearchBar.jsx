export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search destinations..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full p-3 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:border-primary"
      aria-label="Search destinations"
    />
  );
}