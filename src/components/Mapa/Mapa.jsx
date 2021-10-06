import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import Marcador from './Marcador/Marcador'
import './Mapa.scss'
const Mapa = (props) => {
  return (
    <div className="mapa">
      <MapContainer
        className="map"
        center={[-31.3893, -57.961]}
        zoom={14.3}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marcador checked={props.checked} placesRecords={props.placesRecords} />
      </MapContainer>
    </div>
  )
}
export default Mapa
