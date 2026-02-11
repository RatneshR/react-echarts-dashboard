import React from 'react';
import './layout.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="page-title">Dashboard Overview</h1>
                <div className="header-actions">
                    <button className="btn-icon">
                        🔔
                    </button>
                    <button className="btn-primary">
                        + New Report
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
