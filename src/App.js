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
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#111222";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
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
      />
      <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyze below"
        mode={mode}
      />
      {/* <About></About> */}
    </>
  );
}

export default App;
