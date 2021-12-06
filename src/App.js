import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" homeText="Home" aboutText="About" />
      <TextForm heading="Enter the text to analyze below" />
      {/* <About></About> */}
    </>
  );
}

export default App;
