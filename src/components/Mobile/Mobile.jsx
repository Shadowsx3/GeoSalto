import React from "react";
import { Typography, AppBar, Paper, Divider } from "@mui/material";
import Mapa from "../Mapa/Mapa";
import "./Mobile.scss";

const Mobile = (props) => {
  return (
    <div className="home">
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "#e9f5db",
          color: "black",
          border: "solid black",
        }}
      >
        <Divider variant="middle" style={{ marginBottom: "10" }} />
        <Typography variant="h6" component="h6">
          Localidades Artesanales Salto
        </Typography>
        <Divider variant="middle" style={{ marginBottom: "10" }} />
      </AppBar>
      <Paper sx={{ height: "5%", width: "100%", background: "#cfe1b9" }} />
      <Paper sx={{ height: "95%", width: "100%", background: "#cfe1b9" }}>
        <Mapa
          checked={props.checked}
          placesRecords={props.placesRecords}
          categoryRecords={props.categoryRecords}
          setChecked={props.setChecked}
          mobile={true}
        />
      </Paper>
    </div>
  );
};
export default Mobile;
