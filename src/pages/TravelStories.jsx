import React from "react";
import { Link } from "react-router-dom";

export default function TravelStories() {
  // You can replace this demo array with real blog post data later!
  const stories = [
    {
      id: "bali-sunrise",
      title: "Chasing the Sunrise in Bali",
      snippet: "An unforgettable morning among Bali’s rice terraces and volcanoes.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "rome-food",
      title: "A Foodie’s Walk Through Rome",
      snippet: "The best gelato, pasta, and pizza in the Eternal City.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    },
    // Add more stories as you go!
  ];

  return (
     <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-cyan-700">Travel Stories</h1>
      <p className="mb-8 text-lg text-gray-600">
        Dive into stories from around the world. More stories coming soon!
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {stories.map((story) => (
          <div key={story.id} className="rounded-xl shadow-lg bg-gradient-to-br from-pink-50 via-white to-cyan-50 overflow-hidden border border-cyan-100 hover:shadow-2xl transition">
            <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2 text-pink-700">{story.title}</h2>
              <p className="mb-3 text-gray-700">{story.snippet}</p>
              <Link to="#" className="text-cyan-600 font-semibold hover:underline">Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}