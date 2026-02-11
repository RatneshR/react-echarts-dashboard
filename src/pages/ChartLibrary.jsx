import React from "react";
import Card from "../components/common/Card";
import RevenueChart from '../components/charts/RevenueChart';
import UserDistributionChart from '../components/charts/UserDistributionChart';
import PerformanceChart from '../components/charts/PerformanceChart';

const ChartLibrary = () => {
    return (
        <div className="chart-library">
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Apache Echarts Library
            </h2>
            <Card title="Line Chart (Gradient)">
                <RevenueChart />
            </Card>
            <Card title="Pie Chart (Donut)">
                <UserDistributionChart />
            </Card>
            <Card title="Bar Chart (Gradient)">
                <PerformanceChart />
            </Card>
        </div>
    );
};

export default ChartLibrary;