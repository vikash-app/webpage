import travelDestinations from "../travelDestinations";
import TimelineItem from "../components/TimelineItem";

function groupByYear(events) {
  const groups = {};
  for (const event of events) {
    const year = event.date.slice(0, 4);
    if (!groups[year]) groups[year] = [];
    groups[year].push(event);
  }
  return Object.entries(groups)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([year, events]) => ({ year, events }));
}

export default function TimelineSection() {
  const events = travelDestinations.map((d) => ({
    type: "destination",
    date: d.visitDate,
    title: d.title,
    location: d.location,
    image: d.image,
    link: `/travel-destinations/${d.id}`,
    description: d.description,
  })).sort((a, b) => b.date.localeCompare(a.date));

  const grouped = groupByYear(events);

  return (
    <section className="w-full mt-16">
      <h2 className="text-3xl font-bold mb-8 text-pink-600 text-center">Timeline</h2>
      <div className="relative">
        {/* Vertical line — desktop center, mobile left */}
        <div className="absolute left-1.5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 to-cyan-300" />

        {grouped.map(({ year, events: yearEvents }) => (
          <div key={year} className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6 relative z-10">
              <span className="bg-gray-50 dark:bg-gray-900 px-4">{year}</span>
            </h3>
            {yearEvents.map((event, i) => (
              <TimelineItem key={event.link} event={event} isLeft={i % 2 === 0} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
