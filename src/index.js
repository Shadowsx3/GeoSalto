import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import L from 'leaflet';
import point from "./images/point.svg";
import 'leaflet/dist/leaflet.css'
delete L.Icon.Default.prototype._getIconUrl;

// Importing images from locally stored assets to address a bug
// in CodeSandbox: https://github.com/codesandbox/codesandbox-client/issues/3845

L.Icon.Default.mergeOptions({
  iconUrl: point,
  iconRetinaUrl: point,
  popupAnchor: [10, -44],
  iconSize: [25, 55],
  iconAnchor: [5, 55],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
