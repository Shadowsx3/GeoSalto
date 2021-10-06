import React from 'react'
import { Marker, Popup } from 'react-leaflet'
//rfce
const Marcador = (props) => {
  return (
    <div className="marcador">
      {props.placesRecords.map((d) => {
        if (props.checked.includes(d.categoria)) {
          return (
            <Marker position={[d.x, d.y]} key={d.nombre}>
              <Popup>{d.nombre}</Popup>
            </Marker>
          )
        }
        return <></>
      })}
    </div>
  )
}

export default Marcador
