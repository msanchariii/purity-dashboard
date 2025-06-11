"use client";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "A", value: 300 },
    { name: "B", value: 200 },
    { name: "C", value: 100 },
    { name: "D", value: 250 },
    { name: "E", value: 450 },
    { name: "F", value: 320 },
    { name: "G", value: 270 },
    { name: "H", value: 120 },
    { name: "I", value: 400 },
];

export default function GradientBarChart() {
    return (
        <div className="rounded-xl p-4 bg-gradient-to-r from-[#2c2f5b] to-[#11131f]">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient
                            id="barGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="0%"
                                stopColor="#fff"
                                stopOpacity={0.9}
                            />
                            <stop
                                offset="100%"
                                stopColor="#fff"
                                stopOpacity={0.3}
                            />
                        </linearGradient>
                    </defs>

                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#ffffff22"
                    />
                    <XAxis
                        dataKey="name"
                        tick={{ fill: "#fff", fontSize: 12 }}
                    />
                    <YAxis tick={{ fill: "#fff", fontSize: 12 }} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(0, 0, 0)", // subtle dark background
                            border: "none",
                            borderRadius: "8px",
                            padding: "10px",
                            color: "#fff", // text color
                        }}
                        cursor={{ fill: "transparent" }} // removes the weird dark bg hover under bar
                        labelStyle={{ color: "#fff", fontWeight: "bold" }}
                        itemStyle={{ color: "#fff" }}
                    />

                    <Bar
                        dataKey="value"
                        fill="url(#barGradient)"
                        barSize={20}
                        // activeBar={{ fill: "none" }} // keeps hover the same
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
