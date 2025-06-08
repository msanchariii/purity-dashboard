import { Project } from "@/lib/fakeData";
import React, { ReactNode } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const TableCell = ({
    children,
    className,
    ...props
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <td className={`py-4 px-4 ${className}`} {...props}>
            {children}
        </td>
    );
};

const TableHeaderCell = ({
    children,
    className,
    ...props
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <th className={`py-3 px-4 ${className}`} {...props}>
            {children}
        </th>
    );
};

const ProjectsTable = ({
    projects,
    className,
}: {
    projects: Project[];
    className?: string | undefined;
}) => {
    const formatBudget = (budget: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(budget);
    };

    const computeStatusBadgeStyle = (
        status: "Active" | "On Hold" | "Completed"
    ) => {
        switch (status) {
            case "Active":
                return "text-green-600 bg-green-200 border-green-600";
            case "On Hold":
                return "text-orange-500 bg-yellow-200 border-orange-500";
            case "Completed":
                return "text-sky-700 bg-sky-200";
            default:
                return "text-gray-100 bg-gray-400";
        }
    };

    return (
        <div className={`bg-white p-6 rounded-lg space-y-4 ${className}`}>
            <h2 className="text-lg font-bold ml-4">Projects Table</h2>
            <div className="overflow-x-auto rounded-md">
                <table className="w-full text-left text-sm">
                    <thead className="text-dhusor uppercase tracking-wide text-xs border-b-2 border-gray-200 ">
                        <tr>
                            <TableHeaderCell className="flex items-center gap-4">
                                companies
                            </TableHeaderCell>
                            <TableHeaderCell>budget</TableHeaderCell>
                            <TableHeaderCell>status</TableHeaderCell>
                            <TableHeaderCell>completion</TableHeaderCell>
                            <TableHeaderCell className="sr-only">
                                Action
                            </TableHeaderCell>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b-1 border-gray-200 hover:bg-gray-50"
                            >
                                <TableCell className="flex gap-4 items-center">
                                    {/* <div className="h-8 w-8 bg-gray-400 rounded-xl"></div> */}
                                    {item.icon && (
                                        <item.icon
                                            className={`size-5 ${item.iconClass}`}
                                        />
                                    )}

                                    <div className="font-semibold text-base">
                                        {item.company}
                                    </div>
                                </TableCell>
                                <TableCell className="font-semibold text-base max-w-20 ">
                                    {formatBudget(item.budget)}
                                </TableCell>

                                <TableCell className="max-w-20 ">
                                    <span
                                        className={`text-xs px-4 py-1 rounded-full border-[1.5px] font-medium ${computeStatusBadgeStyle(
                                            item.status
                                        )}`}
                                    >
                                        {item.status}
                                    </span>
                                </TableCell>

                                <TableCell className="font-medium">
                                    <span className="font-bold text-lg text-sky-500">
                                        {item.completetion} %
                                    </span>
                                    {/* progress */}
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                        <div
                                            className="bg-sky-500 h-2 rounded-full"
                                            style={{
                                                width: `${item.completetion}%`,
                                            }}
                                        ></div>
                                    </div>
                                </TableCell>
                                <TableCell className="flex justify-center items-center">
                                    <button className="font-semibold text-base text-gray-700 flex items-center justify-center p-1 hover:bg-gray-300 rounded-xl cursor-pointer">
                                        <BsThreeDotsVertical className="size-6" />
                                    </button>
                                </TableCell>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectsTable;
