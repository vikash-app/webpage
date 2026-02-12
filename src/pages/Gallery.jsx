import { useState } from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import galleryPhotos from "../galleryData";
import LightboxModal from "../components/LightboxModal";
import StoriesTabBar from "../components/StoriesTabBar";
import SEO from "../components/SEO";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <SEO
        title="Gallery"
        description="Browse photos from 15 travel destinations across Europe and Asia."
        path="/travel-stories/gallery"
      />
      <h1 className="text-3xl font-bold mb-2">Stories</h1>
      <StoriesTabBar />
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mt-8">
        {galleryPhotos.map((photo, i) => (
          <motion.div
            key={photo.id}
            className="mb-4 break-inside-avoid cursor-pointer"
            whileHover={{ scale: 1.02 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            onClick={() => setSelectedIndex(i)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 ml-1">{photo.location}</p>
          </motion.div>
        ))}
      </div>
      {selectedIndex !== null && (
        <LightboxModal
          photo={galleryPhotos[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onPrev={() => setSelectedIndex((i) => Math.max(0, i - 1))}
          onNext={() => setSelectedIndex((i) => Math.min(galleryPhotos.length - 1, i + 1))}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < galleryPhotos.length - 1}
        />
      )}
    </div>
  );
}
