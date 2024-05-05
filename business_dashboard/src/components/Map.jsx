import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ currentMarkerPosition, setCurrentMarkerPosition}) => {
    
    function LocationFinder() {
        const map = useMapEvents({
            click(e) {
                setCurrentMarkerPosition(e.latlng);
            }
        })
    }

    return (
        <MapContainer className='w-full h-full' center={[currentMarkerPosition.lat, currentMarkerPosition.lng]} zoom={17} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[currentMarkerPosition.lat, currentMarkerPosition.lng]}>
            {/* <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup> */}
            </Marker>

            <LocationFinder />
        </MapContainer>
    ) 
}

export default Map;