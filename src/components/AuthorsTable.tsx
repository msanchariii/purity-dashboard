import { Author } from "@/lib/fakeData";
import Image from "next/image";
import React, { ReactNode } from "react";

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

const AuthorsTable = ({ authors }: { authors: Author[] }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-lg font-bold ml-4">Authors Table</h2>
            <div className="overflow-x-auto rounded-md">
                <table className="w-full text-left text-sm">
                    <thead className="text-dhusor uppercase tracking-wide text-xs border-b-2 border-gray-200 ">
                        <tr>
                            <TableHeaderCell className="flex items-center gap-4">
                                Author
                            </TableHeaderCell>
                            <TableHeaderCell>Function</TableHeaderCell>
                            <TableHeaderCell>Status</TableHeaderCell>
                            <TableHeaderCell>Employeed</TableHeaderCell>
                            <TableHeaderCell className="sr-only">
                                Action
                            </TableHeaderCell>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((person, index) => (
                            <tr
                                key={index}
                                className="border-b-1 border-gray-200 hover:bg-gray-50"
                            >
                                <TableCell className="flex gap-4 items-center">
                                    <Image
                                        src={`/assets/avatar/avatar${
                                            index + 1
                                        }.webp`}
                                        height={50}
                                        width={50}
                                        className="h-12 w-12 bg-gray-400 rounded-xl"
                                        alt={`${person.name}'s avatar`}
                                    ></Image>
                                    <div>
                                        <div className="font-semibold text-base">
                                            {person.name}
                                        </div>
                                        <div className="text-gray-500 text-sm">
                                            {person.email}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="font-semibold text-base">
                                        {person.jobTitle}
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        {person.department}
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <span
                                        className={`px-2 py-1 text-sm rounded-md font-semibold ${
                                            person.status === "Online"
                                                ? "text-green-100 bg-green-700"
                                                : "text-gray-100 bg-gray-400"
                                        }`}
                                    >
                                        {person.status}
                                    </span>
                                </TableCell>

                                <TableCell className="font-medium">
                                    {person.employedOn}
                                </TableCell>
                                <TableCell>
                                    <button className="font-semibold text-base text-gray-700">
                                        Edit
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

export default AuthorsTable;
