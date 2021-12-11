import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(function () {
      setAlert(null);
    }, 500);
  };

  const colorDisplayModeChanger = (colorDisplayMode) => {
    console.log("colorBtnModeChanger clicked");

    switch (colorDisplayMode) {
      case "primary":
        document.body.style.backgroundColor = "#0d6efd";
        break;
      case "secondary":
        document.body.style.backgroundColor = "#6c757d";
        break;
      case "success":
        document.body.style.backgroundColor = "#198754";
        break;
      case "danger":
        document.body.style.backgroundColor = "#dc3545";
        break;
      case "warning":
        document.body.style.backgroundColor = "#ffc107";
        break;
      case "info":
        document.body.style.backgroundColor = "#0dcaf0";
        break;
    }
    setMode(colorDisplayMode);
    showAlert(colorDisplayMode + " mode enabled", "success");
  };

  const toggleMode = () => {
    console.log("toggleMode clicked");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#111222";
      document.title ="TextUtils - Light";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title ="TextUtils - Dark"
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        homeText="Home"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        colorDisplayModeChanger={colorDisplayModeChanger}
        showAlert={showAlert}
      />
      <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyze below"
        mode={mode}
        setMode={setMode}
      />
      {/* <About></About> */}
    </>
  );
}

export default App;
