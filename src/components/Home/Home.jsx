import React, { useState } from "react";
import {
  Typography,
  Grid,
  Divider,
  Paper,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  Button,
} from "@mui/material";
import Mapa from "../Mapa/Mapa";
import Clima from "../Clima/Clima";
import Logueo from "../Logueo/Logueo";
import { FixedSizeList } from "react-window";
import "./Home.scss";

const Home = (props) => {
  const [edit, setEdit] = useState(false);
  const handleToggle = (value) => () => {
    const currentIndex = props.checked.indexOf(value);
    const newChecked = [...props.checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    localStorage.setItem("categorychecked", JSON.stringify(newChecked));
    props.setChecked(newChecked);
  };
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
  );
  return (
    <div className="home">
      <Divider variant="middle" style={{ marginBottom: 10 }} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography
            variant="h4"
            component="h4"
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
              marginBottom: 10,
              marginLeft: 12,
            }}
          >
            Localidades Artesanales Salto
          </Typography>
        </Grid>
        <Grid item xs={2}>
          {props.logued ? (
            <Button
              onClick={() => {
                setEdit(!edit);
                console.log(edit);
              }}
              variant="contained"
              sx={
                !edit
                  ? { background: "#97a97c", width: "100%" }
                  : { width: "100%" }
              }
            >
              Modo edición
            </Button>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={2}>
          <Clima />
        </Grid>
        <Grid item xs={2}>
          <Logueo
            logued={props.logued}
            setLogued={props.setLogued}
            setEdit={setEdit}
          />
        </Grid>
      </Grid>
      <Divider variant="middle" style={{ marginBottom: 2 }} />
      <Grid
        sx={{ p: 2, flexGrow: 1, width: "100%", height: "85%" }}
        container
        spacing={2}
      >
        <Grid item xs={2}>
          <Paper
            sx={{
              p: 2,
              height: "100%",
              background: "#cfe1b9",
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Categorias
            </Typography>
            <Divider variant="middle" style={{ marginBottom: "0.5%" }} />
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
              height: "100%",
              background: "#cfe1b9",
              border: "2px dashed black",
            }}
          >
            <Mapa
              logued={props.logued}
              checked={props.checked}
              placesRecords={props.placesRecords}
              setplacesRecords={props.setplacesRecords}
              categoryRecords={props.categoryRecords}
              edit={edit}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
