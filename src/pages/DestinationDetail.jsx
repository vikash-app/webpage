import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import TravelDestinations from "../travelDestinations";
import MapEmbed from "../components/MapEmbed";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function DestinationDetail() {
  const { id } = useParams();
  const dest = TravelDestinations.find((d) => d.id === Number(id));

  if (!dest) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10">
        <p className="text-xl text-gray-600 mb-4">Destination not found.</p>
        <Link
          to="/travel-destinations"
          className="text-red-600 hover:text-red-800 font-medium"
        >
          &larr; Back to Destinations
        </Link>
      </div>
    );
  }

  const hasContent = !!dest.content;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <Link
          to="/travel-destinations"
          className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors font-medium"
        >
          &larr; Back to Destinations
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] mt-4 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg">
            {dest.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium drop-shadow">
            {dest.location}
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        className="max-w-4xl mx-auto px-4 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          About {dest.title}
        </h2>
        {hasContent && dest.content.about ? (
          <div className="space-y-4">
            {dest.content.about.map((paragraph, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-gray-700 leading-relaxed text-lg">
            {dest.description}
          </p>
        )}
      </motion.section>

      {/* Highlights Section */}
      {hasContent && dest.content.highlights && (
        <motion.section
          className="max-w-6xl mx-auto px-4 pb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            variants={fadeIn}
          >
            Key Highlights
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dest.content.highlights.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                variants={fadeIn}
              >
                <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Map Section */}
      {dest.latitude && dest.longitude && (
        <motion.section
          className="max-w-4xl mx-auto px-4 pb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Location</h2>
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <MapEmbed
              locations={[
                {
                  latitude: dest.latitude,
                  longitude: dest.longitude,
                  title: dest.title,
                },
              ]}
              zoom={12}
            />
          </div>
        </motion.section>
      )}
    </div>
  );
}

export default DestinationDetail;
