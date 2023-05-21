// import logo from './logo.svg';
import "./App.css";
import About from "./componenets/About";
import Alert from "./componenets/Alert";
import Navbar from "./componenets/Navbar";
import TextForm from "./componenets/TextForm";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light "); // dark mode is off by default and tells whether dark mode is on or off
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("null");
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode Has Been Enabled ", "success");
      document.body.style.backgroundColor = "#1d26ab";
      document.title = "textUtils-Dark mode ";
      // setInterval(()=>{
      //   document.title= 'textUtils is  amazing ';
      // },2000)
      // setInterval(()=>{
      //   document.title= 'Download Now ';
      // },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled ", "success");
      document.title = "textUtils-light mode ";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3 ">
          {/* <About /> */}

          {/* <TextForm
            
            heading="Enter The Text To Analyze Below  "  mode={mode} showAlert={showAlert}
           
          /> */}
          {/* <Routes>
            <Route path="/" element={ <About />} />
            
          </Routes> */}

          {/* <About/> */}

          <Routes>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
          <Routes>
            <Route
               exact // to avoid partial matching of react 
              path="/home"
              element={
                <TextForm
                  heading="Enter The Text To Analyze Below  "
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
