import React from 'react';
import * as echarts from 'echarts';
import BaseChart from './BaseChart';
import { revenueData } from '../../data/mockData';

const RevenueChart = () => {
    const options = {
        grid: { top: 40, right: 20, bottom: 25, left: 40, containLabel: true },
        xAxis: {
            type: 'category',
            data: revenueData.categories,
            axisLine: { lineStyle: { color: '#334155' } },
            axisLabel: { color: '#94a3b8' },
        },
        yAxis: {
            type: 'value',
            splitLine: { lineStyle: { color: '#334155', type: 'dashed' } },
            axisLabel: { color: '#94a3b8' },
        },
        series: [
            {
                name: 'Revenue',
                data: revenueData.series[0].data,
                type: 'line',
                smooth: true,
                symbol: 'none',
                lineStyle: { width: 3, color: '#3b82f6' },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(59, 130, 246, 0.5)' },
                        { offset: 1, color: 'rgba(59, 130, 246, 0)' },
                    ]),
                },
            },
            {
                name: 'Cost',
                data: revenueData.series[1].data,
                type: 'line',
                smooth: true,
                symbol: 'none',
                lineStyle: { width: 3, color: '#8b5cf6' },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(139, 92, 246, 0.5)' },
                        { offset: 1, color: 'rgba(139, 92, 246, 0)' },
                    ]),
                },
            },
        ],
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(30, 41, 59, 0.9)',
            borderColor: '#334155',
            textStyle: { color: '#f8fafc' },
        },
        legend: {
            data: ['Revenue', 'Cost'],
            bottom: 0,
            textStyle: { color: '#94a3b8' },
        }
    };

    return <BaseChart options={options} height="350px" />;
};

export default RevenueChart;
