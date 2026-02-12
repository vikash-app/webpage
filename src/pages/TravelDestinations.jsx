import { useState } from "react";
import travelDestinations from "../travelDestinations";
import DestinationCard from "../components/DestinationCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import SEO from "../components/SEO";

function TravelDestinations() {
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    regions: [],
    countries: [],
    tags: [],
  });

  const handleFilterChange = (filterType, value) => {
    setActiveFilters((prev) => {
      const current = prev[filterType];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [filterType]: updated };
    });
  };

  const handleClearAll = () => {
    setActiveFilters({ regions: [], countries: [], tags: [] });
  };

  const filtered = travelDestinations
    .filter((dest) => {
      const matchesSearch =
        !search ||
        dest.title.toLowerCase().includes(search.toLowerCase()) ||
        dest.location.toLowerCase().includes(search.toLowerCase());
      const matchesRegion =
        activeFilters.regions.length === 0 ||
        activeFilters.regions.includes(dest.region);
      const matchesCountry =
        activeFilters.countries.length === 0 ||
        activeFilters.countries.includes(dest.country);
      const matchesTags =
        activeFilters.tags.length === 0 ||
        activeFilters.tags.some((t) => dest.tags.includes(t));
      return matchesSearch && matchesRegion && matchesCountry && matchesTags;
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <SEO
        title="Footprints"
        description="Browse 15 travel destinations across Europe and Asia including Berlin, Prague, Vienna, Rome, Venice, and more. Find your next adventure."
        path="/travel-destinations"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Footprints",
          "description": "Browse 15 travel destinations across Europe and Asia.",
          "url": "https://vikash.app/travel-destinations"
        }}
      />
      <h1 className="text-3xl font-bold mb-6">Footprints</h1>
      <SearchBar value={search} onChange={setSearch} />
      <FilterBar
        destinations={travelDestinations}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearAll={handleClearAll}
      />
      <p className="text-sm text-gray-500 mb-4">
        Showing {filtered.length} of {travelDestinations.length} destinations
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map(dest => <DestinationCard key={dest.id} dest={dest} />)}
      </div>
    </div>
  );
}

export default TravelDestinations;
