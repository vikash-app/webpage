import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import { TravelDestinations } from "../travelDestinations";

export default function Home() {
  const featured = TravelDestinations.slice(0, 3);
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-4 text-primary">Welcome to vikash.app</h1>
        <p className="text-lg mb-6">
          Discover the stories behind remarkable journeys. Explore destinations, maps, and inspiring travel stories.
        </p>
        <SearchBar />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Destinations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map(dest => <DestinationCard key={dest.id} dest={dest} />)}
        </div>
        <div className="mt-8 text-center">
          <Link to="/travel-destinations" className="bg-primary text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-accent transition">
            Explore All Destinations
          </Link>
        </div>
      </section>
    </div>
  );
}