import React from "react";
import { Typography, Divider, Paper } from "@mui/material";
import Mapa from "../Mapa/Mapa";
import Opci from "./Opci/Opciones";
import "./Mobile.scss";

const Mobile = (props) => {
  return (
    <div className="home">
      <Divider variant="middle" style={{ marginBottom: "0.1%" }} />
      <Typography variant="h5" component="h5" className="mobile">
        Localidades Artesanales Salto
      </Typography>
      <Divider variant="middle" style={{ marginBottom: 5 }} />
      <Paper
        sx={{ p: 1, height: "7%", width: "95%", background: "#cfe1b9" }}
        className="mobile"
      >
        <Opci props={props} />
      </Paper>
      <Divider variant="middle" style={{ marginBottom: 5 }} />
      <Paper sx={{ p: 1, height: "80%", width: "95%", background: "#cfe1b9" }}>
        <Mapa checked={props.checked} placesRecords={props.placesRecords} />
      </Paper>
    </div>
  );
};
export default Mobile;
