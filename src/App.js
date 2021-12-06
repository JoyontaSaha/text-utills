import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#111222";

    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";

    }
  }

  return (
    <>
      <Navbar title="TextUtils" homeText="Home" aboutText="About" mode={mode} toggleMode={toggleMode}/>
       <TextForm heading="Enter the text to analyze below"  mode={mode}/>
      {/* <About></About> */}
    </>
  );
}

export default App;
