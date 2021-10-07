import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mapa from "./components/Mapa/Mapa";
import Home from "./components/Home/Home";
import Mobile from "./components/Mobile/Mobile";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [placesRecords, setplacesRecords] = useState([]);
  const [categoryRecords, setcategoryRecords] = useState([]);
  const [checked, setChecked] = React.useState([]);
  const [logued, setLogued] = React.useState(false);
  useEffect(() => {
    const localStorageplacesRecords = JSON.parse(
      localStorage.getItem("placesRecords")
    );
    const localStoragecategoryRecords = JSON.parse(
      localStorage.getItem("categoryRecords")
    );
    const categorychecked = JSON.parse(localStorage.getItem("categorychecked"));
    if (localStorageplacesRecords) {
      setplacesRecords(localStorageplacesRecords);
    }
    if (localStoragecategoryRecords) {
      setcategoryRecords(localStoragecategoryRecords);
    }
    if (categorychecked) {
      setChecked(categorychecked);
    } else {
      if (localStoragecategoryRecords) {
        setChecked(localStoragecategoryRecords);
      }
    }
    /*fetch("https://shadow.devilskykid.com/Salto/places.php")
      .then((res) => res.json())
      .then((result) => {
        console.log(JSON.stringify(result));
        setplacesRecords(result);
        localStorage.setItem("placesRecords", JSON.stringify(result));
      });
    fetch("https://shadow.devilskykid.com/Salto/category.php")
      .then((res) => res.json())
      .then((result) => {
        console.log(JSON.stringify(result));
        setcategoryRecords(result);
        localStorage.setItem("categoryRecords", JSON.stringify(result));
        if (categorychecked) {
        } else {
          setChecked(localStoragecategoryRecords);
        }
      });*/
  }, []);
  const theme = createTheme({
    palette: {
      text: {
        primary: "#000346",
        secondary: "#000346",
      },
      primary: {
        main: "#000346",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/map">
              <Mapa checked={checked} placesRecords={placesRecords} />
            </Route>
            <Route path="/">
              {isDesktopOrLaptop && (
                <Home
                  checked={checked}
                  setChecked={setChecked}
                  logued={logued}
                  setLogued={setLogued}
                  categoryRecords={categoryRecords}
                  placesRecords={placesRecords}
                  setplacesRecords={setplacesRecords}
                />
              )}
              {isTabletOrMobile && (
                <Mobile
                  checked={checked}
                  setChecked={setChecked}
                  categoryRecords={categoryRecords}
                  placesRecords={placesRecords}
                />
              )}
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
