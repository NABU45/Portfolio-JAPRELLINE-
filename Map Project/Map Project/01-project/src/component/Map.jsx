// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"

// import "leaflet/dist/leaflet.css";

// // const position = [51.505, -0.09]

// const Map = ({ currentMarkerPosition, setCurrentMarkerPosition }) => {


//   function locationMarker() {
//     const Map = useMapEvents({
//       click(e) {
//         setCurrentMarkerPosition(e.latlng);
//       }
//     })

//   }

//   return (

//     <div className="w-screen h-screen bg-r0se-400">
//       <MapContainer className='h-full w-full' center={[currentMarkerPosition.lat, currentMarkerPosition.lng]} zoom={13} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[currentMarkerPosition.lat, currentMarkerPosition.lng]}>
//           {/* <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup> */}
//         </Marker>
//         <locationMarker />
//       </MapContainer>
//     </div>
//   )
// }

// export default Map;

import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from  "react-leaflet";
import  "leaflet/dist/leaflet.css";
const Map = ({ currentMarkerPosition ,setCurrentMarkerPosition }) => {
    // const position = [51.505, -0.09]
    function LocationMarker (){
      const map = useMapEvents({
        click(e) {
          setCurrentMarkerPosition(e.latlng);
        }
      })
    }
  return (
    
    <div className="w-scree h-screen bg-rose-400">

    <MapContainer className = "w-full h-full"center={[currentMarkerPosition.lat, currentMarkerPosition.lng]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[currentMarkerPosition.lat, currentMarkerPosition.lng]}>
      {/* <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup> */}
    </Marker>
    <LocationMarker />
  </MapContainer>
      
    </div>
)

}

export default Map;

