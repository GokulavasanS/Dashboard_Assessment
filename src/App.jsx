import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Dashboard/LoginPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import Connections from './Pages/Dashboard/ConnectionsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/connections" element={<Connections />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;