import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';

/**
 * Displays a single map with markers for all locations.
 * Props:
 *  - locations: Array of { latitude, longitude, title }
 *  - center: { latitude, longitude }
 *  - zoom: number (default: 5)
 */
function MapEmbed({ locations = [], center, zoom = 5 }) {
  if (!Array.isArray(locations) || locations.length === 0) {
    return null;
  }

  const validLocations = locations.filter(
    loc => Number.isFinite(loc.latitude) && Number.isFinite(loc.longitude)
  );

  if (validLocations.length === 0) {
    return null;
  }

  // Use provided center or center on the first valid location
  const mapCenter = center
    ? [center.latitude, center.longitude]
    : [validLocations[0].latitude, validLocations[0].longitude];

  return (
    <MapContainer
      center={mapCenter}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: 300, width: '100%' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {validLocations.map((loc, idx) => (
        <Marker
          key={loc.title || idx}
          position={[loc.latitude, loc.longitude]}
        >
          <Popup>{loc.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

MapEmbed.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
  center: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }),
  zoom: PropTypes.number,
};

MapEmbed.defaultProps = {
  locations: [],
  center: null,
  zoom: 5,
};

export default MapEmbed;