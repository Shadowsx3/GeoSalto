import ReactWeather, { useOpenWeather } from "react-open-weather";
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

const Clima = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "53f9e231225ae7bc65b2d197015ded95",
    lat: "-31.3893",
    lon: "-57.961",
    lang: "es",
    unit: "metric", // values are (metric, standard, imperial)
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ background: "#97a97c", width: "85%" }}
      >
        Tiempo en salto
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="es"
          locationLabel="Salto"
          unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
          showForecast
        />
      </Dialog>
    </div>
  );
};
export default Clima;
