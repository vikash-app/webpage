import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
//import travelDestinations from "../DestinationList"; // updated import (remove curly braces)
import DestinationList from "../DestinationList";
import MapEmbed from "../components/MapEmbed";

export default function Home() {
  // Show three featured destinations for cards
  const featured = DestinationList.slice(0, 3);

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
        <div>
      {/* Single map at the very top */}
      <MapEmbed
  locations={DestinationList.map(dest => ({
    latitude: dest.latitude,
    longitude: dest.longitude,
    title: dest.title || dest.name
  }))}
  center={{ latitude: 51.0, longitude: 10.0 }}
  zoom={5}
/>
      {/* Your Search bar and other content here */}
    </div>
        <SearchBar />
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-6 text-pink-600">Featured Destinations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map(dest => (
            <div key={dest.id}>
              <DestinationCard dest={dest} />
              {/* Show a map for each featured destination */}
              <div className="mt-4">
                <MapEmbed lat={dest.latitude} lng={dest.latitude} title={dest.title || dest.name} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/travel-destinations" className="bg-pink-500 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow transition">
            Explore All Destinations
          </Link>
        </div>
      </section>
      {/* Optionally show a list of all destinations as links */}
     {/* <section className="mt-16">
  <h2 className="text-2xl font-bold mb-4 text-cyan-600">All Destinations</h2>
  <ul className="grid md:grid-cols-2 gap-4">
    {travelDestinations.map(dest => (
      <li key={dest.id} className="flex flex-col gap-2 border p-4 rounded-lg bg-white shadow">
        <div className="flex items-center gap-2">
          <Link to={`/travel-destinations/${dest.id}`} className="text-pink-600 hover:underline font-semibold">
            {dest.title}
          </Link>
          <span className="text-gray-400">({dest.location})</span>
        </div>
        {Number.isFinite(dest.latitude) && Number.isFinite(dest.longitude) && (
          <div className="mt-2">
            <MapEmbed latitude={dest.latitude} longitude={dest.longitude} title={dest.title} />
          </div>
        )}
      </li>
    ))}
  </ul>
</section>*/}

    </div>
  );
}