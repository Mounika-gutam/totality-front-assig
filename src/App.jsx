import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Flats from "./components/Flats"

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  setIsLoggedIn = (isLoggedIn) => {
    this.setState({ isLoggedIn });
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setIsLoggedIn={this.setIsLoggedIn} />}
          />
          <Route
            path="/home"
            element={this.state.isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="*"
            element={<Navigate to={this.state.isLoggedIn ? "/home" : "/login"} />}
          />

          <Route
            exact
            path="/flats"
            element={<Flats />}
             />
          

        </Routes>
      </Router>
    );
  }
}

export default App;
