import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  const [modeName, setModeName] = useState('Light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);

    }, 1500);

  }
  const toggleMode = () => {
    if (Mode === "light") {
      setMode('dark');
      setModeName('Dark')
      document.body.style.backgroundColor = 'gray';
      showAlert('Dark mode has been enabled', "success");
      document.title = "TextUtils - Dark mode";
    }
    else {
      setMode('light');
      setModeName('Light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', "success");
      document.title = "TextUtils - Light mode";
    }
  }
  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" aboutText="About UtilText" Mode={Mode} toggleMode={toggleMode} modeName={modeName} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About Mode={Mode}/>} />
            <Route exact path='/' element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra space, Email Extracter" Mode={Mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router> */}
      
        <Navbar title="TextUtils" aboutText="About UtilText" Mode={Mode} toggleMode={toggleMode} modeName={modeName} />
        <Alert alert={alert} />
        <div className="container my-3">
          <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra space, Email Extracter" Mode={Mode} showAlert={showAlert} />
        </div>
    </>
  );
}

export default App;
