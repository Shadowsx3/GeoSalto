import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
//import "./Mapa.scss";
const Mapa = () => {
  const [placesRecords, setplacesRecords] = useState([])
  useEffect(() => {
    fetch('https://trabajosucubuslon.000webhostapp.com/places.php')
      .then((res) => res.json())
      .then((result) => {
        console.log(JSON.stringify(result))
        setplacesRecords(result)
      })
  }, [])
  return (
    <div className="mapa">
      <Typography
        variant="h4"
        component="h4"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        Software de testeo
      </Typography>
      <Divider variant="middle" style={{ marginBottom: '10px' }} />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          Hola
        </Grid>
        <Grid item xs={10}>
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
            {placesRecords.map((d) => (
              <Marker position={[d.x, d.y]}>
                <Popup>{d.text}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Grid>
      </Grid>
    </div>
  )
}
export default Mapa
