import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import travelDestinations from "../travelDestinations";
import MapEmbed from "../components/MapEmbed";

export default function Home() {
  const featured = travelDestinations.slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <section className="flex flex-col items-center gap-0">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text" style={{ marginBottom: 0 }}>
          Welcome to vikash.app
        </h1>
        <p className="text-lg text-gray-700" style={{ marginTop: 0 }}>
          Discover stories behind remarkable journeys.<br />
          Explore destinations, maps, and inspiring travel stories.
        </p>
        <MapEmbed
          locations={travelDestinations.map(dest => ({
            latitude: dest.latitude,
            longitude: dest.longitude,
            title: dest.title || dest.name
          }))}
          center={{ latitude: 51.0, longitude: 10.0 }}
          zoom={5}
        />
        <SearchBar />
      </section>
      <section className="w-full">
        <h2 className="text-3xl font-bold mb-6 text-pink-600 text-center">Featured Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full" style={{textAlign: 'initial'}}>
          {featured.map(dest => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
        </div>
        <div className="mt-10 text-center w-full">
          <Link to="/travel-destinations" className="bg-pink-500 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow transition">
            Explore All Destinations
          </Link>
        </div>
      </section>
    </div>
  );
}