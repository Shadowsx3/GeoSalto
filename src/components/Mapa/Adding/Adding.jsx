import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Categoria from "./Categoria";

const Adding = (props) => {
  const [open, setOpen] = React.useState(false);
  const [credentialsError, setCredentialsError] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState(
    props.categoryRecords[1]
  );
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [formFields, setFormFields] = useState({
    Name: "",
    Descripcion: "",
  });

  const handleFormFields = (e) => {
    setFormFields({
      ...formFields,
      [e.target.id]: e.target.value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    const { Name: NameValue, Descripcion: DescripcionValue } = formFields;
    let hasEmptyNameError = false;
    let hasEmptyDescripcionError = false;

    if (NameValue.trim() === "") {
      hasEmptyNameError = true;
    }
    if (DescripcionValue.trim() === "") {
      hasEmptyDescripcionError = true;
    }
    const hasErrors = hasEmptyNameError || hasEmptyDescripcionError;

    if (hasErrors) {
      setFormFields({
        Name: formFields.Name,
        Descripcion: formFields.Descripcion,
      });
      setCredentialsError(true);
    } else {
      const nuevo = {
        x: props.lugar.x,
        y: props.lugar.y,
        nombre: formFields.Name,
        descripcion: formFields.Descripcion,
        link: "",
        categoria: selectedValue,
      };
      fetch("https://shadow.devilskykid.com/Salto/add.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(nuevo),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(JSON.stringify(result));
          props.setplacesRecords(result);
          localStorage.setItem("placesRecords", JSON.stringify(result));
        });
      handleClose();
      //props.lugar;
    }
  };
  const { Name: NameValue, Descripcion: DescripcionValue } = formFields;

  return (
    <div>
      <Button onClick={handleClickOpen} variant="text">
        Agregar
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "#e9f5db" }}>Local</DialogTitle>
        <DialogContent sx={{ backgroundColor: "#e9f5db" }}>
          <Paper elevation={3}>
            <Box sx={{ p: 2, backgroundColor: "#e9f5db" }}>
              <div className="add__form">
                <div>
                  <TextField
                    id="Name"
                    label="Nombre"
                    color="primary"
                    variant="standard"
                    value={NameValue}
                    required
                    onChange={handleFormFields}
                  />
                </div>
                <div>
                  <TextField
                    id="Descripcion"
                    label="Descripcion"
                    type="text"
                    color="primary"
                    variant="standard"
                    value={DescripcionValue}
                    required
                    onChange={handleFormFields}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        submitLogin(event);
                      }
                    }}
                  />
                  <Categoria
                    categoryRecords={props.categoryRecords}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                  />
                </div>
                <div className="login__button">
                  <Button
                    onClick={(e) => submitLogin(e)}
                    variant="contained"
                    fullWidth
                    sx={{ backgroundColor: "#97a97c" }}
                  >
                    Añadir
                  </Button>
                </div>
                <div className="login__invalid-credentials">
                  {credentialsError && (
                    <>
                      <div>Ingrese ambos campos.</div>
                    </>
                  )}
                </div>
              </div>
            </Box>
          </Paper>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Adding;
