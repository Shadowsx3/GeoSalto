import React from 'react'
import {
  Typography,
  Divider,
  Paper,
} from '@mui/material'
import Mapa from '../Mapa/Mapa'
import Opci from './Opci/Opciones'
import './Mobile.scss'

const Mobile = (props) => {
  return (
    <div className="home">
      <Divider variant="middle" style={{ marginBottom: 10 }} />
          <Typography
            variant="h5"
            component="h5"
            style={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'left',
              marginBottom: 10,
              marginLeft: 12
            }}
          >
            Productores de Salto
          </Typography>
      <Divider variant="middle" style={{ marginBottom: 2 }} />
      <Paper
        sx={{
          p: 1,
          height: '5%',
          background: '#cfe1b9',
        }}
      >
          <Opci props={props}/>
          </Paper>
          <Paper
        sx={{
          p: 1,
          height: '80%',
          background: '#cfe1b9',
        }}
      >
        <Mapa checked={props.checked} placesRecords={props.placesRecords} />
        
      </Paper>
    </div>
  )
}
export default Mobile
