import React from "react";
import { Typography, Button } from "@mui/material";
const Dialogo = (prop) => {
  const props = prop.d;
  return (
    <div>
      <Typography
        variant="h6"
        component="h6"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.nombre}
      </Typography>
      <p>{props.descripcion}</p>
      {props.link !== "" ? (
        <img style={{ width: "100%" }} src={props.link} alt={props.nombre} />
      ) : (
        ""
      )}
      {prop.logued ? (
        <Button
          onClick={() => {
            fetch("https://shadow.devilskykid.com/Salto/delete.php", {
              method: "POST",
              headers: {
                Accept: "application/json",
              },
              body: JSON.stringify(props),
            })
              .then((res) => res.json())
              .then((result) => {
                console.log(JSON.stringify(result));
                prop.setplacesRecords(result);
                localStorage.setItem("placesRecords", JSON.stringify(result));
              });
          }}
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "#e63946" }}
        >
          Borrar
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dialogo;
