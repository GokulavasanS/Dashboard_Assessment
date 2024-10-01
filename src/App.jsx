import React from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';
import Connections from './Pages/Dashboard/ConnectionsPage';
import './App.css';
import LoginPage from './Pages/Dashboard/LoginPage';

function App() {
  return (
    <div className="App">
      {/* <Dashboard />
      <Connections />  */}
      <LoginPage />
    </div>
  );
}

export default App;
