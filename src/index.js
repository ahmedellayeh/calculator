import { createRoot } from "react-dom/client";
import React from "react";
import Calculator from "./components/Calculator/Calculator";
import './style.css'

const element = document.querySelector("#app_root");
const root = createRoot(element);

root.render(
    <React.StrictMode>
        <Calculator/>
    </React.StrictMode>
);