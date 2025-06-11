import { Link } from "react-router-dom";

export default function DestinationCard({ dest }) {
  return (
    <Link to={`/travel-destinations/${dest.id}`}>
      <div className="rounded-xl shadow-lg bg-white dark:bg-darkSurface transition hover:scale-105 hover:shadow-xl overflow-hidden">
        <img src={dest.image} alt={dest.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{dest.title}</h2>
          <p className="text-gray-700 dark:text-gray-200">{dest.location}</p>
        </div>
      </div>
    </Link>
  );
}