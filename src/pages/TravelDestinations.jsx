import { useState } from "react";
import DestinationList from "../DestinationList";
import DestinationCard from "../components/DestinationCard";
import SearchBar from "../components/SearchBar";
import SEO from "../components/SEO";

function TravelDestinations() {
   const [search, setSearch] = useState("");
  const filtered = DestinationList
    .filter(dest =>
      (dest.title && dest.title.toLowerCase().includes(search.toLowerCase())) ||
      (dest.location && dest.location.toLowerCase().includes(search.toLowerCase()))
    )
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
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {filtered.map(dest => <DestinationCard key={dest.id} dest={dest} />)}
      </div>
    </div>
  );
}

export default TravelDestinations;