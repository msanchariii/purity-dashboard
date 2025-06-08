import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";

type Transaction = {
    company: string;
    amount: number | "Pending";
    status: "profit" | "loss" | "pending";
    date: string;
    age: "Newest" | "Older";
};

const transactionPlaceholderData: Transaction[] = [
    {
        company: "Netflix",
        amount: 2500,
        status: "profit",
        date: "27 March 2021, at 12:30 PM",
        age: "Newest",
    },
    {
        company: "Spotify",
        amount: 1500,
        status: "profit",
        date: "26 March 2021, at 11:00 AM",
        age: "Older",
    },
    {
        company: "Amazon",
        amount: 3000,
        status: "loss",
        date: "25 March 2021, at 10:15 AM",
        age: "Newest",
    },
    {
        company: "Apple",
        amount: "Pending",
        status: "pending",
        date: "24 March 2021, at 09:45 AM",
        age: "Older",
    },
    {
        company: "Google",
        amount: 3500,
        status: "loss",
        date: "23 March 2021, at 08:30 AM",
        age: "Newest",
    },
];

const Transactions = () => {
    return (
        <div className="p-6  space-y-4">
            <div>
                <h3 className="text-lg font-bold">Your Transactions</h3>
            </div>
            <div>
                {transactionPlaceholderData.map((transaction, index) => (
                    <div
                        key={index}
                        className={`flex justify-between p-4 mb-4 rounded-lg text-xs font-medium space-y-1`}
                    >
                        <div className="flex items-center gap-2">
                            {transaction.status === "profit" ? (
                                <FaArrowUp className="text-green-500 inline mr-2 ring-2 rounded-full p-1 size-8" />
                            ) : transaction.status === "loss" ? (
                                <FaArrowDown className="text-red-500 inline mr-2 ring-2 rounded-full p-1 size-8" />
                            ) : (
                                <MdOutlinePendingActions className="text-gray-400 inline mr-2 ring-2 rounded-full p-1 size-8" />
                            )}
                            <div>
                                <h3 className="text-lg text-kalo font-bold">
                                    {transaction.company}
                                </h3>
                                <p className="text-xs text-dhusor font-medium">
                                    {transaction.date}
                                </p>
                            </div>
                        </div>
                        <p className="font-semibold text-base">
                            {transaction.status === "pending" ? (
                                <span className="text-gray-500 ">Pending</span>
                            ) : transaction.status === "profit" ? (
                                <span className="text-green-500">{`+ ${transaction.amount.toLocaleString()}`}</span>
                            ) : (
                                <span className="text-red-500 ">{`- ${transaction.amount.toLocaleString()}`}</span>
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transactions;
