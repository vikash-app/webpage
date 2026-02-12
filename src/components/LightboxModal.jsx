import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

export default function LightboxModal({ photo, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const handleKey = useCallback((e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft" && hasPrev) onPrev();
    if (e.key === "ArrowRight" && hasNext) onNext();
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={onClose}>
      <div className="relative max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white text-3xl font-light transition"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Previous */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white/70 hover:text-white text-4xl font-light transition hidden md:block"
            aria-label="Previous photo"
          >
            &#8249;
          </button>
        )}

        {/* Image */}
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />

        {/* Caption */}
        {photo.location && (
          <p className="text-white/70 text-center mt-3 text-sm">{photo.location}</p>
        )}

        {/* Next */}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white/70 hover:text-white text-4xl font-light transition hidden md:block"
            aria-label="Next photo"
          >
            &#8250;
          </button>
        )}

        {/* Mobile nav */}
        <div className="flex justify-center gap-8 mt-4 md:hidden">
          {hasPrev && (
            <button onClick={onPrev} className="text-white/70 hover:text-white text-2xl px-4 py-2">
              &#8249; Prev
            </button>
          )}
          {hasNext && (
            <button onClick={onNext} className="text-white/70 hover:text-white text-2xl px-4 py-2">
              Next &#8250;
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

LightboxModal.propTypes = {
  photo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    location: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrev: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
};
