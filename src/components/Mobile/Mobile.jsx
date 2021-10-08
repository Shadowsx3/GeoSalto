import React from "react";
import { Typography, AppBar, Paper, Divider } from "@mui/material";
import Mapa from "../Mapa/Mapa";
import "./Mobile.scss";

const Mobile = (props) => {
  return (
    <div className="home">
      <Paper sx={{ height: "100%", width: "100%", background: "#cfe1b9" }}>
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
