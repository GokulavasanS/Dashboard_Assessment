import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Settings, Database, Layers, Clock } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: <Settings size={20} /> },
    { name: 'Datahub', icon: <Database size={20} /> },
    { name: 'Other Modules', icon: <Layers size={20} /> },
    { name: 'Settings', icon: <Settings size={20} /> }
  ];

  const statusCards = [
    { title: 'Connections', count: 4, percentage: 75, color: '#00bcd4' },
    { title: 'Configurations', count: 1, color: '#ffa726' },
    { title: 'Pipelines', count: 1, color: '#ef5350' },
    { title: 'Schedules', count: 2, color: '#ab47bc' }
  ];

  const areaChartData = [
    { name: 'ConnectionDetail', Active: 2, Inactive: 0 },
    { name: 'PipelineDetail', Active: 3, Inactive: 0 },
    { name: 'ScheduleDepend', Active: 0, Inactive: 0 }
  ];

  const barChartData = [
    { name: 'Connection', Active: 3, Inactive: 1 },
    { name: 'Config', Active: 1, Inactive: 0 },
    { name: 'Pipeline', Active: 1, Inactive: 0 },
    { name: 'Schedules', Active: 2, Inactive: 0 }
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <nav>
          <ul>
            {navItems.map((item) => (
              <li
                key={item.name}
                className={activeNavItem === item.name ? 'active' : ''}
                onClick={() => setActiveNavItem(item.name)}
              >
                {item.icon}
                <a href={`#${item.name.toLowerCase()}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>Dashboard</h1>
        <div className="status-cards">
          {statusCards.map((card) => (
            <div key={card.title} className="card" style={{ backgroundColor: card.color }}>
              <h2>{card.title}</h2>
              <p>Total Count: {card.count}</p>
              {card.percentage ? (
                <div className="progress-circle" style={{ background: `conic-gradient(#ffffff ${card.percentage * 3.6}deg, transparent ${card.percentage * 3.6}deg)` }}>
                  {card.percentage}%
                </div>
              ) : (
                <div className="check-circle">✓</div>
              )}
            </div>
          ))}
        </div>
        <div className="charts">
          <div className="chart">
            <h2>Active vs Inactive Details</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={areaChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Active" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="Inactive" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="chart">
            <h2>Active vs Inactive Counts</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Active" fill="#82ca9d" />
                <Bar dataKey="Inactive" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;