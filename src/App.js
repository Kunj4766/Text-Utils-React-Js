import React, { useState } from 'react'
import './App.css';
import Alert from './Componants/Alert';
import Navbar from './Componants/Navbar';
import TextForm from './Componants/TextForm';
import About from './Componants/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('info');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('info');
      document.body.style.backgroundColor = 'white'
      showAlert('light mode is enabled', 'success')
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#2d6195'
      showAlert('dark mode is enabled', 'success')
    }
  }
  const [alert, setalert] = useState(null);

  const showAlert = (massage, type) => {
    setalert({
      msg: massage,
      type: type
    }
      , setTimeout(() => {
        setalert(null)
      }, 2000)
    )
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" link={Link} myMode={mode} jane={toggleMode} />
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <Alert save={alert} />
            <div className="container">
              <TextForm heading="Enter Your Text Below To Analyz" myMode={mode} showAlert={showAlert} />
            </div>
          </Route>
        </Switch>       
      </Router>
    </>
  );
}

export default App;
