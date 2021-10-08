import { Marker, Popup, MapConsumer, useMapEvents } from "react-leaflet";
import React, { useState } from "react";
import Dialogo from "../Dialogo/Dialogo";
import Adding from "../Adding/Adding";
//rfce
const Marcador = (props) => {
  const [NewMark, setNewMark] = useState({
    x: "",
    y: "",
    active: false,
  });
  useMapEvents({
    click(e) {
      if (props.edit) {
        const { lat, lng } = e.latlng;
        setNewMark({
          x: lat,
          y: lng,
          active: true,
        });
        console.log(e.latlng);
      }
    },
  });
  return (
    <div className="marcador">
      {!props.edit ? (
        props.placesRecords.map((d, i) => {
          if (props.checked.includes(d.categoria)) {
            return (
              <Marker position={[d.x, d.y]} key={"Marker" + d.nombre + i}>
                <Popup key={"pop-up" + d.nombre}>
                  <Dialogo
                    d={d}
                    logued={props.logued}
                    setplacesRecords={props.setplacesRecords}
                    key={"Dialogo" + d.nombre}
                  />
                </Popup>
              </Marker>
            );
          }
          return <></>;
        })
      ) : (
        <MapConsumer>
          {() => {
            if (NewMark.active) {
              return (
                <Marker position={[NewMark.x, NewMark.y]}>
                  <Popup>
                    <Adding
                      lugar={NewMark}
                      categoryRecords={props.categoryRecords}
                      setplacesRecords={props.setplacesRecords}
                    />
                  </Popup>
                </Marker>
              );
            } else {
              return <></>;
            }
          }}
        </MapConsumer>
      )}
    </div>
  );
};

export default Marcador;
