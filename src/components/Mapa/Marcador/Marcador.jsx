import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import Dialogo from '../Dialogo/Dialogo'
//rfce
const Marcador = (props) => {
  return (
    <div className="marcador">
      {props.placesRecords.map((d) => {
        if (props.checked.includes(d.categoria)) {
          return (
            <Marker position={[d.x, d.y]} key={d.nombre}>
              <Popup><Dialogo d={d}/></Popup>
            </Marker>
          )
        }
        return <></>
      })}
    </div>
  )
}

export default Marcador
