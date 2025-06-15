import { useParams } from "react-router-dom";
//import { TravelDestinations } from "../travelDestinations";
import TravelDestinations from "../travelDestinations";
import MapEmbed from "../components/MapEmbed";

function DestinationDetail() {
  const { id } = useParams();
  const dest = TravelDestinations.find(d => d.id === id);
  if (!dest) return <div className="p-10">Destination not found.</div>;
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{dest.title}</h1>
      <img src={dest.image} alt={dest.title} className="w-full h-56 object-cover rounded-lg mb-6" />
      <div className="mb-4">
        <p className="font-semibold">Location: {dest.location}</p>
        <p>{dest.description}</p>
      </div>
      {dest.latitude && dest.longitude && (
        <MapEmbed lat={dest.latitude} lng={dest.longitude} title={dest.title} />
      )}
    </div>
  );
}
export default DestinationDetail;