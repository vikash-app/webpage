import { useState } from "react";
import PropTypes from "prop-types";

function Pill({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm font-medium transition cursor-pointer ${
        isActive
          ? "bg-pink-500 text-white shadow-sm"
          : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}

Pill.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function FilterSection({ title, options, activeValues, filterType, onFilterChange }) {
  return (
    <div className="mb-3">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Pill
            key={option}
            label={option}
            isActive={activeValues.includes(option)}
            onClick={() => onFilterChange(filterType, option)}
          />
        ))}
      </div>
    </div>
  );
}

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterType: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default function FilterBar({ destinations, activeFilters, onFilterChange, onClearAll }) {
  const [isOpen, setIsOpen] = useState(false);

  const regions = [...new Set(destinations.map((d) => d.region))].sort();
  const countries = [...new Set(destinations.map((d) => d.country))].sort();
  const tags = [...new Set(destinations.flatMap((d) => d.tags))].sort();

  const hasActiveFilters =
    activeFilters.regions.length > 0 ||
    activeFilters.countries.length > 0 ||
    activeFilters.tags.length > 0;

  const activeCount =
    activeFilters.regions.length +
    activeFilters.countries.length +
    activeFilters.tags.length;

  const filterContent = (
    <div className="space-y-1">
      <FilterSection
        title="Region"
        options={regions}
        activeValues={activeFilters.regions}
        filterType="regions"
        onFilterChange={onFilterChange}
      />
      <FilterSection
        title="Country"
        options={countries}
        activeValues={activeFilters.countries}
        filterType="countries"
        onFilterChange={onFilterChange}
      />
      <FilterSection
        title="Type"
        options={tags}
        activeValues={activeFilters.tags}
        filterType="tags"
        onFilterChange={onFilterChange}
      />
      {hasActiveFilters && (
        <button
          type="button"
          onClick={onClearAll}
          className="text-sm text-pink-500 hover:text-pink-700 font-medium transition cursor-pointer mt-1"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="mb-4">
      {/* Mobile toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full border-2 border-pink-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium text-sm hover:bg-pink-50 transition cursor-pointer mb-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 14.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-6.586L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>
        Filter
        {activeCount > 0 && (
          <span className="bg-pink-500 text-white text-xs rounded-full px-2 py-0.5">
            {activeCount}
          </span>
        )}
      </button>

      {/* Desktop: always visible */}
      <div className="hidden md:block">{filterContent}</div>

      {/* Mobile: collapsible */}
      {isOpen && <div className="md:hidden">{filterContent}</div>}
    </div>
  );
}

FilterBar.propTypes = {
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      region: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  activeFilters: PropTypes.shape({
    regions: PropTypes.arrayOf(PropTypes.string).isRequired,
    countries: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onClearAll: PropTypes.func.isRequired,
};
