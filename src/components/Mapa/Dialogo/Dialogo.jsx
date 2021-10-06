import React from 'react'
import {
    Typography
  } from '@mui/material'
const Dialogo = (prop) => {
    const props = prop.d
    return (
        <div>
            <Typography
              variant="h6"
              component="h6"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {props.nombre}
            </Typography>
            <p>
                {props.descripcion}
            </p>
            <img  style={{ width: "100%"}}
        src={'https://i1.wp.com/www.todouruguay.net/wp-content/uploads/2019/06/Parque_Acuatico_Termas_de_Salto_Grande2.jpg?fit=1195%2C669&ssl=1'}
        alt={props.nombre}
      />
        </div>
    )
}

export default Dialogo
