import React, { useState, useEffect } from 'react'
import { Marker, Popup } from 'react-leaflet'
//rfce
const Marcador = (props) => {
  const [places, setplaces] = React.useState(
    JSON.parse(localStorage.getItem('placesRecords')),
  )
  return (
    <div className="marcador">
      {places.map((d) => {
        if (props.checked.includes(d.categoria)) {
          return (
            <Marker position={[d.x, d.y]} key={d.nombre}>
              <Popup>{d.nombre}</Popup>
            </Marker>
          )
        }
      })}
    </div>
  )
}

export default Marcador
