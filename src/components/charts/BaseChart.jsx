import React, { useRef, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const BaseChart = ({ options, style, height = '300px', loading = false }) => {
    const chartRef = useRef(null);

    // Common chart configuration (theme-like)
    const defaultOptions = {
        backgroundColor: 'transparent',
        textStyle: {
            fontFamily: 'Inter, sans-serif',
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#1e293b',
            borderColor: '#334155',
            textStyle: {
                color: '#f8fafc',
            },
        },
        grid: {
            top: 40,
            right: 20,
            bottom: 20,
            left: 20,
            containLabel: true,
        },
        ...options,
    };

    return (
        <div className="chart-container" style={{ height, width: '100%', ...style }}>
            <ReactECharts
                ref={chartRef}
                option={defaultOptions}
                style={{ height: '100%', width: '100%' }}
                theme="dark_custom"
                showLoading={loading}
                loadingOption={{
                    text: 'Loading...',
                    color: '#3b82f6',
                    textColor: '#f8fafc',
                    maskColor: 'rgba(15, 23, 42, 0.8)',
                    zlevel: 0,
                }}
                settings={{ notMerge: true }} // Ensure updates are clean
            />
        </div>
    );
};

export default BaseChart;
