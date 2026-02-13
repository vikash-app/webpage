import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import TravelStats from "../components/TravelStats";
import TimelineSection from "./Timeline";
import travelDestinations from "../travelDestinations";
import MapEmbed from "../components/MapEmbed";
import SEO from "../components/SEO";

export default function Home() {
  const featured = travelDestinations.slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <SEO
        path="/"
        description="Discover stories behind remarkable journeys. Explore 15+ travel destinations across Europe and Asia with interactive maps and inspiring travel stories."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "vikash.app",
          "url": "https://vikash.app",
          "description": "Discover stories behind remarkable journeys. Explore travel destinations, interactive maps, and inspiring travel stories from around the world."
        }}
      />
      <section className="flex flex-col items-center gap-0">
        <MapEmbed
          locations={travelDestinations.map(dest => ({
            id: dest.id,
            latitude: dest.latitude,
            longitude: dest.longitude,
            title: dest.title || dest.name
          }))}
        />
        <SearchBar />
      </section>
      <TravelStats />
      <section className="w-full">
        <h2 className="text-3xl font-bold mb-6 text-pink-600 text-center">Featured Footprints</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full" style={{textAlign: 'initial'}}>
          {featured.map(dest => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
        </div>
        <div className="mt-10 text-center w-full">
          <Link to="/travel-destinations" className="bg-white hover:bg-red-50 !text-red-600 border-2 border-red-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Explore All Footprints
          </Link>
        </div>
      </section>
      <TimelineSection />
    </div>
  );
}
