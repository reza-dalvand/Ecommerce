import "./App.css";
import * as React from "react";
import MainNavbar from "./components/MainNavbar";
import { Slider } from "@mui/material";

function App() {
  return (
    <section>
      <MainNavbar />
      <Slider style={{ marginTop: 100 }} />
    </section>
  );
}

export default App;
