import React from 'react';
import Card from '../components/common/Card';

const Settings = () => {
    return (
        <div className="settings-page">
            <Card title="Account Settings">
                <div className="settings-form">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" defaultValue="admin_user" className="input-field" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" defaultValue="admin@example.com" className="input-field" />
                    </div>
                    <button className="btn-primary" style={{ marginTop: '1rem' }}>Save Changes</button>
                </div>
            </Card>

            <Card title="Preferences" className="mt-4">
                <div className="settings-options">
                    <div className="option-row">
                        <span>Dark Mode</span>
                        <div className="toggle-switch active"></div>
                    </div>
                    <div className="option-row">
                        <span>Email Notifications</span>
                        <div className="toggle-switch active"></div>
                    </div>
                </div>
            </Card>

            <style jsx="true">{`
        .input-field {
          width: 100%;
          padding: 0.75rem;
          background-color: var(--color-bg-primary);
          border: 1px solid var(--color-bg-tertiary);
          border-radius: var(--radius-sm);
          color: var(--color-text-primary);
          margin-top: 0.5rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          color: var(--color-text-secondary);
          font-size: 0.875rem;
        }

        .mt-4 {
          margin-top: var(--spacing-lg);
        }

        .option-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid var(--color-bg-tertiary);
        }

        .option-row:last-child {
          border-bottom: none;
        }

        .toggle-switch {
          width: 40px;
          height: 20px;
          background-color: var(--color-bg-tertiary);
          border-radius: 999px;
          position: relative;
          cursor: pointer;
        }

        .toggle-switch.active {
          background-color: var(--color-accent-success);
        }

        .toggle-switch::after {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          background-color: white;
          border-radius: 50%;
          top: 2px;
          left: 2px;
          transition: transform 0.2s;
        }

        .toggle-switch.active::after {
          transform: translateX(20px);
        }
      `}</style>
        </div>
    );
};

export default Settings;
