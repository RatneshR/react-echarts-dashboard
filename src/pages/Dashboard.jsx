import React from 'react';
import Card from '../components/common/Card';
import RevenueChart from '../components/charts/RevenueChart';
import UserDistributionChart from '../components/charts/UserDistributionChart';
import PerformanceChart from '../components/charts/PerformanceChart';

const Dashboard = () => {
    return (
        <div className="grid-dashboard">
            <Card title="Revenue Overview" className="col-span-2">
                <RevenueChart />
            </Card>

            <Card title="User Demographics">
                <UserDistributionChart />
            </Card>

            <Card title="Monthly Performance">
                <PerformanceChart />
            </Card>

            <Card title="Recent Activity" className="col-span-2">
                <div style={{ padding: '1rem', color: 'var(--color-text-secondary)' }}>
                    <p>• User <strong>John Doe</strong> upgraded to Pro plan (2 mins ago)</p>
                    <p style={{ marginTop: '0.5rem' }}>• System alert: <strong>Server Load</strong> at 45% (15 mins ago)</p>
                    <p style={{ marginTop: '0.5rem' }}>• New Report <strong>Q3 Financials</strong> generated (1 hour ago)</p>
                </div>
            </Card>
        </div>
    );
};

export default Dashboard;
