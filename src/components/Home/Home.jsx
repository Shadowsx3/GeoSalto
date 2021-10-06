import React from 'react'
import {
  Typography,
  Grid,
  Divider,
  Paper,
  Button,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Checkbox,
} from '@mui/material'
import Mapa from '../Mapa/Mapa'
import { useHistory } from 'react-router-dom'
import { FixedSizeList } from 'react-window'
import './Home.scss'

const Home = (props) => {
  let history = useHistory()
  const handleToggle = (value) => () => {
    const currentIndex = props.checked.indexOf(value)
    const newChecked = [...props.checked]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    localStorage.setItem('categorychecked', JSON.stringify(newChecked))
    props.setChecked(newChecked)
  }
  const Row = ({ index, style }) => (
    <div style={style}>
      <ListItemButton
        onClick={handleToggle(props.categoryRecords[index])}
        dense
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={props.checked.indexOf(props.categoryRecords[index]) !== -1}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText primary={props.categoryRecords[index]} />
      </ListItemButton>
    </div>
  )
  return (
    <div className="home">
      <Divider variant="middle" style={{ marginBottom: 10 }} />
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography
            variant="h4"
            component="h4"
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
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            sx={{ background: '#97a97c' }}
            onClick={() => {
              history.push('/map')
            }}
          >
            Pantalla completa
          </Button>
        </Grid>
      </Grid>
      <Divider variant="middle" style={{ marginBottom: 2 }} />
      <Grid
        sx={{ p: 2, flexGrow: 1, width: '100%', height: '85%' }}
        container
        spacing={2}
      >
        <Grid item xs={2}>
          <Paper
            sx={{
              p: 2,
              height: '100%',
              background: '#cfe1b9',
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Categorias
            </Typography>
            <FixedSizeList
              height={440}
              width={170}
              itemSize={46}
              itemCount={props.categoryRecords.length}
            >
              {Row}
            </FixedSizeList>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper
            sx={{
              p: 2,
              height: '100%',
              background: '#cfe1b9',
              border: '2px dashed black',
            }}
          >
            <Mapa checked={props.checked} placesRecords={props.placesRecords} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
export default Home
