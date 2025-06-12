import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import { TravelDestinations } from "../travelDestinations";

export default function Home() {
  const featured = TravelDestinations.slice(0, 3);
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
          Welcome to vikash.app
        </h1>
       <p className="text-lg mb-8 text-gray-700">
          Discover stories behind remarkable journeys.<br />
          Explore destinations, maps, and inspiring travel stories.
        </p>
        <SearchBar />
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-6 text-pink-600">Featured Destinations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map(dest => <DestinationCard key={dest.id} dest={dest} />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/travel-destinations" className="bg-pink-500 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow transition">
            Explore All Destinations
          </Link>
        </div>
      </section>
    </div>
  );
}