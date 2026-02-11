import React from 'react';
import BaseChart from './BaseChart';
import { userStatsData } from '../../data/mockData';

const UserDistributionChart = () => {
    const options = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(30, 41, 59, 0.9)',
            borderColor: '#334155',
            textStyle: { color: '#f8fafc' },
        },
        legend: {
            bottom: '0%',
            left: 'center',
            textStyle: { color: '#94a3b8' },
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#1e293b',
                    borderWidth: 2,
                },
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold',
                        color: '#f8fafc',
                    },
                },
                labelLine: { show: false },
                data: userStatsData.data,
                color: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'],
            },
        ],
    };

    return <BaseChart options={options} height="350px" />;
};

export default UserDistributionChart;
