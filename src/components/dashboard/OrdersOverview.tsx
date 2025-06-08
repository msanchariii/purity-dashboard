import { IconType } from "react-icons";
import { FaUniversity, FaBriefcase, FaRocket } from "react-icons/fa";

type TimelineItem = {
    title: string;
    date: string;
    icon: IconType;
};

const timelineData: TimelineItem[] = [
    {
        title: "$2400, Design changes",
        date: "22 DEC 7:20 PM",
        icon: FaUniversity,
    },
    { title: "New order #4219423", date: "21 DEC 11:21 PM", icon: FaBriefcase },
    {
        title: "Server Payments for April",
        date: "21 DEC 9:28 PM",
        icon: FaRocket,
    },
    {
        title: "New card added for order #3210145",
        date: "20 DEC 12:20 AM",
        icon: FaUniversity,
    },
    {
        title: "Unlock packages for Development",
        date: "19 DEC 11:21 PM",
        icon: FaBriefcase,
    },
    {
        title: "New order #9851258",
        date: "18 DEC 9:28 PM",
        icon: FaRocket,
    },
];

export default function OrdersOverview() {
    return (
        <div className="px-8 py-4">
            <div>
                <h2 className="text-kalo font-bold">Orders Overview</h2>
                <p className="text-sm font-medium text-dhusor ">
                    <span className="font-bold text-green-500">30%</span> this
                    month
                </p>
            </div>
            <ol className="relative border-s-3 border-gray-200 mt-4">
                {timelineData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <li key={index} className="mb-10 ms-6">
                            {/* Icon */}
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-4 ring-white ">
                                <Icon className="size-4 text-sky-500 " />
                            </span>
                            <h3 className="mb-1 text-sm font-semibold text-kalo ">
                                {item.title}
                            </h3>
                            <time className="block mb-2 text-xs font-medium leading-none text-gray-400 ">
                                {item.date}
                            </time>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
