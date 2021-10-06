import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {
    Grid,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Checkbox,
  } from '@mui/material'

const Opciones = (prop) => {
    const props = prop.props
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
      const Row = (item) => {
        const index = item.index
          return (
        <div>
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
      )}
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" fullWidth='true' sx={{m:0, height: "100%" }}>Categorias</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Categorias</DialogTitle>
        <DialogContent>
            <Grid container spacing={0} direction="column"
  justifyContent="space-evenly"
  alignItems="left">
          {Array.from(Array(props.categoryRecords.length).keys()).map((d) => {
          return (
            <Grid item xs>
            <Row index={d}/>
          </Grid>
          )
        }
      )}
      </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Opciones