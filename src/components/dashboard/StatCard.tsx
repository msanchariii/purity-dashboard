import React from 'react'
import { IconType } from 'react-icons';
import { CiGlobe } from 'react-icons/ci';
import { FaFile, FaShoppingCart, FaWallet } from 'react-icons/fa';

export type StatCardProps = {
    heading: string;
    value: string | number;
    percentage?: string;
    type: "loss" | "profit";
    className?: string;
    icon?: IconType;
}

export const stats: StatCardProps[] = [
    {
        heading: "Total Sales",
        value: "$12,345",
        percentage: "+5%",
        type: "profit",
        icon: FaShoppingCart // Replace with an actual icon if needed
    },
    {
        heading: "Today's Expenses",
        value: "$8,765",
        percentage: "-3%",
        type: "profit",
        icon: FaWallet // Replace with an actual icon if needed
    },
    {
        heading: "New Clients",
        value: "$3,580",
        percentage: "+2%",
        type: "loss",
        icon: FaFile // Replace with an actual icon if needed
    },
    {
        heading: "Today's Users",
        value: "1,234",
        percentage: "+10%",
        type: "profit",
        icon: CiGlobe // Replace with an actual icon if needed
    }
]


const StatCard = ({ stat }: {
    stat: StatCardProps;
}) => {
    const Icon = stat.icon
    const { heading, value, percentage, type, className } = stat

    return (


        <div className={`flex items-center justify-between p-5 bg-white rounded-lg  ${className}`}>
            <div className="flex flex-col gap-y-1">
                <h3 className="text-md font-semibold text-dhusor ">{heading}</h3>
                <p className={`text-xl font-bold text-kalo`}>{value}

                    {percentage && (
                        <span className={`text-base ${type === 'profit' ? 'text-green-500' : 'text-red-500'}`}>
                            {" "} {percentage}
                        </span>
                    )}
                </p>
            </div>
            {Icon && (<Icon className="size-14 text-white bg-sky-500 p-4 rounded-2xl" />)}


        </div>

    )
}

export default StatCard
