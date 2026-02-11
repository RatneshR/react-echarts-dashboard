import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import ChartLibrary from './pages/ChartLibrary';
function App() {
    return (
        <Router>
            <DashboardLayout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/chart-library" element={<ChartLibrary />} />
                    {/* Fallback for unknown routes */}
                    <Route path="*" element={<Dashboard />} />
                </Routes>
            </DashboardLayout>
        </Router>
    );
}

export default App;
