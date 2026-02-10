import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
        noIndex
      />
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        alt="Lost in travel"
        className="w-48 h-48 object-cover rounded-full shadow-lg mb-8"
      />
      <h1 className="text-4xl font-bold text-primary mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
        Oops! The page you’re looking for doesn’t exist.<br />
        Maybe you took a wrong turn on your travels?
      </p>
      <Link
        to="/"
        className="bg-primary text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-accent transition"
      >
        Back to Home
      </Link>
    </div>
  );
}