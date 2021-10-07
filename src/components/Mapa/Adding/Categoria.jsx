import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Seleccionar tipo</DialogTitle>
      <List sx={{ pt: 0 }}>
        {props.categoryRecords.map((cateoria) => (
          <ListItem
            button
            onClick={() => handleListItemClick(cateoria)}
            key={cateoria}
          >
            <ListItemText primary={cateoria} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Categoria(props) {
  const [open, setOpen] = React.useState(false);
  const selectedValue = props.selectedValue;
  const setSelectedValue = props.setSelectedValue;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen} fullWidth>
        Tipo: {selectedValue}
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        categoryRecords={props.categoryRecords}
      />
    </div>
  );
}
