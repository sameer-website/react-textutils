import React, { useState } from 'react';
import './App.css';
import TextForm from './Components/TextForm';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import About from './Components/About';
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "warning");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "warning");
    }
  }

  return (
    <>
    {/* <Navbar title="Reactfullcourse" aboutText="Aboutreact"/> */}
    <Router>
    <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode} aboutText="About"/> 
    <Alert alert={alert} mode={mode}/>
    <div className="container my-3 ">
    <Routes>
          <Route exact path='/about' element={<About mode={mode}/>} />  
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter Character counter remove extra spaces" mode={mode}/>} />  
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
