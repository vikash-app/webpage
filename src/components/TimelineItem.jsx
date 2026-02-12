import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TimelineItem({ event, isLeft }) {
  const formattedDate = new Date(event.date + "-01").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <motion.div
      className="relative flex items-center mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      {/* Desktop: alternating layout */}
      <div className={`hidden md:flex w-full items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
        <div className={`w-5/12 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
          <time className="text-sm font-semibold text-pink-600">{formattedDate}</time>
          <p className="text-xs text-gray-400 capitalize">{event.type}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 z-10 ring-4 ring-gray-50 dark:ring-gray-900" />
        </div>
        <div className={`w-5/12 ${isLeft ? "pl-8" : "pr-8"}`}>
          <Link to={event.link}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100 dark:border-gray-700">
              <img src={event.image} alt={event.title} className="w-full h-32 object-cover rounded-lg mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{event.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{event.description}</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile: all on right of line */}
      <div className="flex md:hidden w-full items-start">
        <div className="flex flex-col items-center mr-4 mt-1">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 z-10 ring-4 ring-gray-50 dark:ring-gray-900" />
        </div>
        <div className="flex-1">
          <time className="text-xs font-semibold text-pink-600">{formattedDate}</time>
          <Link to={event.link}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-3 mt-1 border border-gray-100 dark:border-gray-700">
              <img src={event.image} alt={event.title} className="w-full h-28 object-cover rounded-lg mb-2" />
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{event.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">{event.description}</p>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

TimelineItem.propTypes = {
  event: PropTypes.shape({
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isLeft: PropTypes.bool.isRequired,
};
