"use client";
import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", current: 30, previous: 20 },
    { name: "Feb", current: 100, previous: 80 },
    { name: "Mar", current: 200, previous: 300 },
    { name: "Apr", current: 150, previous: 250 },
    { name: "May", current: 300, previous: 500 },
    { name: "Jun", current: 280, previous: 200 },
    { name: "Jul", current: 350, previous: 300 },
    { name: "Aug", current: 220, previous: 150 },
    { name: "Sep", current: 400, previous: 500 },
];

export default function DashboardAreaChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                data={data}
                margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient
                        id="colorCurrent"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop
                            offset="5%"
                            stopColor="#4E7297"
                            stopOpacity={0.4}
                        />
                        <stop
                            offset="95%"
                            stopColor="#4E7297"
                            stopOpacity={0}
                        />
                    </linearGradient>
                    <linearGradient
                        id="colorPrevious"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop
                            offset="5%"
                            stopColor="#00B8D9"
                            stopOpacity={0.3}
                        />
                        <stop
                            offset="95%"
                            stopColor="#00B8D9"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                    dataKey="name"
                    tick={{ fill: "#6B7280", fontSize: 14, fontWeight: 500 }} // gray-500 and medium font
                />
                <YAxis
                    tick={{ fill: "#6B7280", fontSize: 14, fontWeight: 500 }}
                />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="previous"
                    stroke="#00B8D9"
                    strokeWidth={3}
                    fill="url(#colorPrevious)"
                />
                <Area
                    type="monotone"
                    dataKey="current"
                    stroke="#4E7297"
                    strokeWidth={3}
                    fill="url(#colorCurrent)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
