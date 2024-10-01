import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <nav>
          <ul>
            <li className="active"><a href="#dashboard">Dashboard</a></li>
            <li><a href="#datahub">Datahub</a></li>
            <li><a href="#other-modules">Other Modules</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>Dashboard</h1>
        <div className="status-cards">
          <div className="card connections">
            <h2>Connections</h2>
            <p>Total Count: 4</p>
            <div className="progress-circle">75%</div>
          </div>
          <div className="card configurations">
            <h2>Configurations</h2>
            <p>Total Count: 1</p>
            <div className="check-circle"></div>
          </div>
          <div className="card pipelines">
            <h2>Pipelines</h2>
            <p>Total Count: 1</p>
            <div className="check-circle"></div>
          </div>
          <div className="card schedules">
            <h2>Schedules</h2>
            <p>Total Count: 2</p>
            <div className="check-circle"></div>
          </div>
        </div>
        <div className="charts">
          {/* Add chart components here */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;