//import { TravelDestinations } from "../travelDestinations";
import {useState} from "react";
import TravelDestinations from "../travelDestinations"; // Import the travel destinations data
import DestinationCard from "../components/DestinationCard";
import SearchBar from "../components/SearchBar";

function TravelDestinationsPage() {
   const [search, setSearch] = useState("");
  const filtered = travelDestinations.filter(dest =>
    (dest.name && dest.name.toLowerCase().includes(search.toLowerCase())) ||
    (dest.location && dest.location.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Travel Destinations</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {TravelDestinations.map((dest) => (
          <div key={dest.id} style={{
            border: "1px solid #ddd", borderRadius: "8px", width: "300px", padding: "1rem", background: "#fafafa"
          }}>
            <img src={dest.image} alt={dest.title} style={{ width: "100%", borderRadius: "6px" }} />
            <h2>{dest.title}</h2>
            <p><strong>Location:</strong> {dest.location}</p>
            {dest.latitude && dest.longitude && (
              <p>
                <a href={`https://maps.google.com/?q=${dest.latitude},${dest.longitude}`} target="_blank" rel="noopener noreferrer">
                  View on Map
                </a>
              </p>
            )}
            <p>{dest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelDestinationsPage;