//import { TravelDestinations } from "../travelDestinations";
import {useState} from "react";
import DestinationList from "../DestinationList"; // Import the travel destinations data
import DestinationCard from "../components/DestinationCard";
import SearchBar from "../components/SearchBar";

function TravelDestinations() {
   const [search, setSearch] = useState("");
  const filtered = DestinationList.filter(dest =>
    (dest.name && dest.name.toLowerCase().includes(search.toLowerCase())) ||
    (dest.location && dest.location.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Travel Destinations</h1>
      <SearchBar value={search} onChange={setSearch} />
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {filtered.map(dest => <DestinationCard key={dest.id} dest={dest} />)}
      </div>
    </div>
  );
}

export default TravelDestinations;
// This page displays a list of travel destinations with a search bar
// and cards for each destination. It uses the DestinationList data to filter
// and display destinations based on the search input. The DestinationCard
// component is used to render each destination's details in a card format.
// The SearchBar component allows users to filter destinations by name or location.
// The page is styled using Tailwind CSS classes for a responsive layout.
// The filtered destinations are displayed in a grid layout, making it easy to browse through the available options.
// The page is designed to be user-friendly, allowing visitors to quickly find
// destinations that interest them based on their search criteria.
// The useState hook is used to manage the search input state, allowing for dynamic filtering of the destination list.