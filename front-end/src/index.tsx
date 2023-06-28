import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";

// css適用方法を調べる
// import "./utils/css/custom-ag-grid.css";
// import "./utils/css/custom-ag-grid-deader.css";

/* これらは使用するページに記載する
import axios from "axios";
import Chart from "chart.js";
import { AgGridReact } from "ag-grid-react";
import localForage from "localforage";
import { DateTime } from "luxon";
import math from "mathjs";
 */

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
