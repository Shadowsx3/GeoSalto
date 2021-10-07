import React from "react";
import { Typography } from "@mui/material";
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
    </div>
  );
};

export default Dialogo;
