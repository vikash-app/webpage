import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DestinationCard({ dest }) {
  return (
    <Link to={`/travel-destinations/${dest.id}`}>
      <div className="rounded-2xl shadow-lg bg-gradient-to-br from-white via-pink-50 to-cyan-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 hover:from-cyan-50 hover:to-pink-50 transition transform hover:scale-105 hover:shadow-2xl overflow-hidden flex flex-col items-center p-6 min-h-[400px] w-full">
        <div className="w-full bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center mb-2" style={{height: '220px'}}>
          <img src={dest.image} alt={dest.title} className="max-h-full object-contain" />
        </div>
        <div className="p-2 w-full text-center">
          <h2 className="text-lg font-bold mb-1 text-pink-700 dark:text-pink-400">{dest.title}</h2>
          <p className="text-cyan-700 dark:text-cyan-400 mb-2">{dest.location}</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{dest.description?.slice(0, 60)}...</p>
        </div>
      </div>
    </Link>
  );
}

DestinationCard.propTypes = {
  dest: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default DestinationCard;