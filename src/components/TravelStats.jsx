import { useRef, useEffect, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";
import TravelDestinations from "../travelDestinations";

const cities = TravelDestinations.length;
const countries = new Set(TravelDestinations.map((d) => d.country)).size;
const continents = new Set(TravelDestinations.map((d) => d.region)).size;

function AnimatedCounter({ target, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    const unsubscribe = count.on("change", (v) => setDisplayVal(Math.round(v)));
    return unsubscribe;
  }, [count]);

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 1.5, ease: "easeOut" });
    }
  }, [isInView, count, target]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
        {displayVal}
      </span>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg font-medium">{label}</p>
    </div>
  );
}

export default function TravelStats() {
  return (
    <section className="py-12">
      <div className="flex justify-around items-center max-w-3xl mx-auto">
        <AnimatedCounter target={cities} label="Cities" />
        <AnimatedCounter target={countries} label="Countries" />
        <AnimatedCounter target={continents} label="Continents" />
      </div>
    </section>
  );
}
