import React from "react";
import { FaFilePdf } from "react-icons/fa";

type Invoice = {
    id: string;
    date: string;
    amount: number;
    status: "paid" | "unpaid" | "overdue";
    fileUrl: string;
};

const invoices: Invoice[] = [
    {
        id: "#INV-001",
        date: "March, 01, 2020",
        amount: 150.0,
        status: "paid",
        fileUrl: "#",
    },
    {
        id: "#INV-002",
        date: "February, 10, 2020",
        amount: 200.0,
        status: "unpaid",
        fileUrl: "#",
    },
    {
        id: "#INV-003",
        date: "April, 05, 2020",
        amount: 300.0,
        status: "overdue",
        fileUrl: "#",
    },
    {
        id: "#INV-004",
        date: "May, 15, 2020",
        amount: 120.0,
        status: "paid",
        fileUrl: "#",
    },
    {
        id: "#INV-005",
        date: "June, 20, 2020",
        amount: 250.0,
        status: "unpaid",
        fileUrl: "#",
    },
];

const Invoices = () => {
    return (
        <div className="bg-white px-4 py-6 rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Invoices</h3>
                <button className="px-6 py-2  border-sky-500 text-sky-500 hover:bg-sky-100 border-2 rounded-2xl font-semibold cursor-pointer text-sm">
                    View All
                </button>
            </div>
            <div className="space-y-4">
                {invoices.map((invoice) => (
                    <div
                        key={invoice.id}
                        className={`flex items-center justify-between`}
                    >
                        <div className="flex flex-col ">
                            <span className="font-semibold text-sm">
                                {invoice.date}
                            </span>
                            <span className="text-xs text-dhusor font-bold">
                                {invoice.id}
                            </span>
                        </div>
                        <div className="flex gap-x-6 ">
                            <span className="text-md font-medium text-dhusor">
                                ${invoice.amount.toFixed(2)}
                            </span>
                            <a
                                href={invoice.fileUrl}
                                className="flex items-center text-kalo hover:underline gap-x-1"
                            >
                                <FaFilePdf />
                                <span>PDF</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Invoices;
