import {useState} from "react";
import DestinationList from "../DestinationList";
import DestinationCard from "../components/DestinationCard";

function TravelDestinations() {
  const [search] = useState("");
  const filtered = DestinationList.filter(dest =>
    (dest.name && dest.name.toLowerCase().includes(search.toLowerCase())) ||
    (dest.location && dest.location.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Travel Destinations</h1>
      <div className="grid grid-cols-3 gap-6 mt-8">
        {filtered.map(dest => <DestinationCard key={dest.id} dest={dest} />)}
      </div>
    </div>
  );
}

export default TravelDestinations;