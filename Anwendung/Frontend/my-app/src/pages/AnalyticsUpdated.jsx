import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import './Analytics.css';

const Analytics = () => {
    const data = [
        { category: 'Expenses', amount: 500 },
        { category: 'Income', amount: 800 },
        { category: 'Savings', amount: 300 },
    ];

    return (
        <div className="analytics-container">
            <h1>Analytics</h1>
            <p>Here you can view your expenses and income diagrams.</p>
            <div className="charts">
                <ResponsiveBar
                    data={data}
                    keys={['amount']}
                    indexBy="category"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    colors={{ scheme: 'nivo' }}
                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Category',
                        legendPosition: 'middle',
                        legendOffset: 32,
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Amount',
                        legendPosition: 'middle',
                        legendOffset: -40,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                />
            </div>
        </div>
    );
};

export default Analytics;
