import React from "react";
import ReactDom from "react-dom/client";
import { Greeting } from "./Greeting";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Greeting />);