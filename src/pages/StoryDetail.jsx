import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import travelStories from "../travelStories";
import StoryBlock from "../components/StoryBlock";
import SEO from "../components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function StoryDetail() {
  const { storyId } = useParams();
  const story = travelStories.find((s) => s.id === storyId);

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10">
        <p className="text-xl text-gray-600 mb-4">Story not found.</p>
        <Link to="/travel-stories" className="text-pink-600 hover:text-pink-800 font-medium">
          &larr; Back to Stories
        </Link>
      </div>
    );
  }

  const wordCount = story.content
    .filter((b) => b.type === "text")
    .reduce((sum, b) => sum + b.body.split(/\s+/).length, 0);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const formattedDate = new Date(story.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SEO
        title={story.title}
        description={story.snippet}
        path={`/travel-stories/${story.id}`}
        image={story.coverImage}
      />

      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <Link
          to="/travel-stories"
          className="inline-flex items-center gap-1.5 text-base text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          style={{ fontWeight: 800 }}
        >
          &larr; Back
        </Link>
      </div>

      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[350px] mt-4 overflow-hidden">
        <img src={story.coverImage} alt={story.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
            {story.title}
          </h1>
          <p className="text-gray-300 text-sm">
            {formattedDate} &middot; {readingTime} min read
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <motion.article
        className="max-w-3xl mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {story.content.map((block, i) => (
          <motion.div key={i} variants={fadeIn}>
            <StoryBlock block={block} />
          </motion.div>
        ))}
      </motion.article>

      {/* Related destination link */}
      {story.destinationId && (
        <div className="max-w-3xl mx-auto px-4 pb-12 text-center">
          <Link
            to={`/travel-destinations/${story.destinationId}`}
            className="inline-block text-pink-600 hover:text-pink-800 font-semibold transition"
          >
            View destination details &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
