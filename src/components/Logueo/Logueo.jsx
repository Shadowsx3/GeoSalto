import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Logueo = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (props.logued) {
      props.setLogued(false);
      props.setEdit(false);
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [formFields, setFormFields] = useState({
    userName: {
      value: "",
      error: false,
      errorText: "",
    },
    password: {
      value: "",
      error: false,
      errorText: "",
    },
  });
  const [credentialsError, setCredentialsError] = useState(false);

  const handleFormFields = (e) => {
    setFormFields({
      ...formFields,
      [e.target.id]: {
        value: e.target.value,
        error: false,
        errorText: "",
      },
    });
    setCredentialsError(false);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    const {
      userName: { value: userNameValue },
      password: { value: passwordValue },
    } = formFields;

    let hasEmptyUserNameError = false;
    let hasEmptyPasswordError = false;
    let wrongCredentialesError = false;

    let emptyUserNameErrorMessage = "";
    let emptyPasswordErrorMessage = "";

    if (userNameValue.trim() === "") {
      hasEmptyUserNameError = true;
      emptyUserNameErrorMessage = "El campo no puede ser vacío";
    }
    if (passwordValue.trim() === "") {
      hasEmptyPasswordError = true;
      emptyPasswordErrorMessage = "El campo no puede ser vacío";
    }
    if (userNameValue.trim() !== "admin" || passwordValue.trim() !== "admin") {
      wrongCredentialesError = true;
    }
    const hasErrors =
      wrongCredentialesError || hasEmptyUserNameError || hasEmptyPasswordError;

    if (hasErrors) {
      setFormFields({
        userName: {
          ...formFields.userName,
          error: hasEmptyUserNameError,
          errorText: emptyUserNameErrorMessage,
        },
        password: {
          ...formFields.password,
          error: hasEmptyPasswordError,
          errorText: emptyPasswordErrorMessage,
        },
      });
      setCredentialsError(wrongCredentialesError);
    } else {
      handleClose();
      props.setLogued(true);
    }
  };

  const {
    userName: {
      value: userNameValue,
      error: userNameError,
      errorText: userNameErrorText,
    },
    password: {
      value: passwordValue,
      error: passwordError,
      errorText: passwordErrorText,
    },
  } = formFields;

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{ m: "1", background: "#97a97c", width: "85%" }}
      >
        {props.logued ? "Logout" : "Login"}
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "#e9f5db" }}>Login</DialogTitle>
        <DialogContent sx={{ backgroundColor: "#e9f5db" }}>
          <Paper elevation={3}>
            <Box sx={{ p: 2, backgroundColor: "#e9f5db" }}>
              <div className="login__form">
                <div>
                  <TextField
                    id="userName"
                    label="Usuario"
                    color="primary"
                    variant="standard"
                    value={userNameValue}
                    error={userNameError}
                    helperText={userNameErrorText}
                    required
                    onChange={handleFormFields}
                  />
                </div>
                <div>
                  <TextField
                    id="password"
                    label="Contraseña"
                    type="password"
                    color="primary"
                    variant="standard"
                    value={passwordValue}
                    error={passwordError}
                    helperText={passwordErrorText}
                    required
                    onChange={handleFormFields}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        submitLogin(event);
                      }
                    }}
                  />
                </div>
                <div className="login__button">
                  <Button
                    onClick={(e) => submitLogin(e)}
                    variant="contained"
                    fullWidth
                    sx={{ backgroundColor: "#97a97c" }}
                  >
                    Ingresar
                  </Button>
                </div>
                <div className="login__invalid-credentials">
                  {credentialsError && (
                    <>
                      <div>Credenciales inválidas.</div>
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
export default Logueo;
