import React from 'react';
import { NavLink } from 'react-router-dom';
import './layout.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <h2>Analytics</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/reports"
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Reports
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/settings"
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Settings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/chart-library"
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Chart Library
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="avatar">AD</div>
                    <div className="user-info">
                        <span className="name">Admin User</span>
                        <span className="role">Administrator</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
