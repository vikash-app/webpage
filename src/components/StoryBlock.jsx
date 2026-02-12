import PropTypes from "prop-types";

function StoryBlock({ block }) {
  switch (block.type) {
    case "text":
      return (
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          {block.body}
        </p>
      );

    case "image":
      return (
        <figure className="mb-8">
          <img
            src={block.src}
            alt={block.caption || ""}
            className="w-full rounded-lg shadow-md"
            loading="lazy"
          />
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500 italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "quote":
      return (
        <blockquote className="border-l-4 border-pink-500 pl-6 my-8">
          <p className="text-lg italic text-gray-700 leading-relaxed">
            &ldquo;{block.body}&rdquo;
          </p>
          {block.attribution && (
            <footer className="mt-2 text-sm text-gray-500">
              &mdash; {block.attribution}
            </footer>
          )}
        </blockquote>
      );

    default:
      return null;
  }
}

StoryBlock.propTypes = {
  block: PropTypes.shape({
    type: PropTypes.string.isRequired,
    body: PropTypes.string,
    src: PropTypes.string,
    caption: PropTypes.string,
    attribution: PropTypes.string,
  }).isRequired,
};

export default StoryBlock;
