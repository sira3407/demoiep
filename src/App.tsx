import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StudentProgress from './components/StudentProgress';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students/:id" element={<StudentProgress />} />
      </Routes>
    </Router>
  );
}

export default App;

const LocalDashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export { LocalDashboard };