import { Link } from "react-router-dom";
import travelStories from "../travelStories";
import StoriesTabBar from "../components/StoriesTabBar";
import SEO from "../components/SEO";

export default function TravelStories() {
  const stories = [...travelStories].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <SEO
        title="Stories"
        description="Dive into inspiring travel stories from destinations across Europe and Asia."
        path="/travel-stories"
      />
      <h1 className="text-3xl font-bold mb-2">Stories</h1>
      <StoriesTabBar />
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {stories.map((story) => {
          const formattedDate = new Date(story.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return (
            <Link to={`/travel-stories/${story.id}`} key={story.id} className="group">
              <div className="rounded-xl shadow-sm bg-white dark:bg-gray-800 overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5">
                  <time className="text-sm text-gray-400 dark:text-gray-500">{formattedDate}</time>
                  <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-pink-600 transition-colors">
                    {story.title}
                  </h2>
                  <p className="mb-3 text-gray-600 dark:text-gray-400">{story.snippet}</p>
                  <span className="text-pink-600 font-semibold text-sm">
                    Read more &rarr;
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
