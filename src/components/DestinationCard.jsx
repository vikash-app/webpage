import { Link } from "react-router-dom";

function DestinationCard({ dest }) {
  return (
    <Link to={`/travel-destinations/${dest.id}`}>
      <div className="rounded-xl shadow-lg bg-gradient-to-br from-white via-pink-50 to-cyan-50 hover:from-cyan-50 hover:to-pink-50 transition transform hover:scale-105 hover:shadow-2xl overflow-hidden border border-white">
        <img src={dest.image} alt={dest.title} className="w-full h-48 object-cover" />
       <div className="p-4">
          <h2 className="text-xl font-bold mb-1 text-pink-700">{dest.title}</h2>
          <p className="text-cyan-700 mb-2">{dest.location}</p>
          <p className="text-gray-600 text-sm">{dest.description?.slice(0, 60)}...</p>
        </div>
      </div>
    </Link>
  );
}
export default DestinationCard;