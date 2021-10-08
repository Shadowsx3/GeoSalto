import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Marcador from "./Marcador/Marcador";
import "./Mapa.scss";
import Opci from "./Opci/Opciones";
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
        {props.mobile ? <Opci props={props} /> : <></>}
        <Marcador
          checked={props.checked}
          logued={props.logued}
          placesRecords={props.placesRecords}
          setplacesRecords={props.setplacesRecords}
          categoryRecords={props.categoryRecords}
          edit={props.edit}
        />
      </MapContainer>
    </div>
  );
};
export default Mapa;
