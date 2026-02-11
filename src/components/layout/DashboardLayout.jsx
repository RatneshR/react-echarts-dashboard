import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './layout.css';

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <Header />
            <main className="main-content">
                <div className="container">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
