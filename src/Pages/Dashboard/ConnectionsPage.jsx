import React from 'react';
import './ConnectionsPage.css';

const ConnectionsPage = () => {
  const connections = [
    { id: 1, name: 'oracle', description: 'connect to AWS', startDate: '04-03-2023', endDate: '05-03-2023', active: true },
    { id: 2, name: 'aws', description: 'desc', startDate: '04-03-2023', endDate: '05-10-2023', active: true },
    { id: 3, name: '', description: 'test', startDate: '04-04-2023', endDate: '05-10-2023', active: false },
  ];

  return (
    <div className="connections-page">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li className="active"><a href="#connections">Connections</a></li>
            <li><a href="#configurations">Configurations</a></li>
            <li><a href="#pipelines">Pipelines</a></li>
            <li><a href="#schedules">Schedules</a></li>
            <li><a href="#audit">Audit</a></li>
            <li><a href="#monitordata">MonitorData</a></li>
            <li><a href="#tenant">Tenant</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="page-header">
          <h1>Connections</h1>
          <button className="new-connection-btn">New Connection</button>
        </header>
        <div className="connections-table-container">
          <table className="connections-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Connection Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {connections.map((connection, index) => (
                <tr key={connection.id}>
                  <td>{index + 1}</td>
                  <td>{connection.name}</td>
                  <td>{connection.description}</td>
                  <td>{connection.startDate}</td>
                  <td>{connection.endDate}</td>
                  <td>
                    <label className="switch">
                      <input type="checkbox" checked={connection.active} readOnly />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td>
                    <button className="action-btn edit">Edit</button>
                    <button className="action-btn view">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <span>Total 3 items</span>
          <button className="page-btn active">1</button>
          <span>7 / page</span>
        </div>
      </main>
    </div>
  );
};

export default ConnectionsPage;