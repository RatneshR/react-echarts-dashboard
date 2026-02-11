import React from 'react';
import * as echarts from 'echarts';
import BaseChart from './BaseChart';
import { activeUsersData } from '../../data/mockData';

const PerformanceChart = () => {
    const options = {
        grid: { top: 20, right: 20, bottom: 20, left: 40, containLabel: true },
        xAxis: {
            type: 'category',
            data: activeUsersData.categories,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: '#94a3b8' },
        },
        yAxis: {
            type: 'value',
            splitLine: { lineStyle: { color: '#334155', type: 'dashed' } },
            axisLabel: { color: '#94a3b8' },
        },
        series: [
            {
                data: activeUsersData.data,
                type: 'bar',
                showBackground: true,
                backgroundStyle: { color: 'rgba(255, 255, 255, 0.05)', borderRadius: 4 },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#10b981' },
                        { offset: 1, color: 'rgba(16, 185, 129, 0.5)' },
                    ]),
                    borderRadius: [4, 4, 0, 0],
                },
                barWidth: '40%',
            },
        ],
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(30, 41, 59, 0.9)',
            borderColor: '#334155',
            textStyle: { color: '#f8fafc' },
        },
    };

    return <BaseChart options={options} height="350px" />;
};

export default PerformanceChart;
