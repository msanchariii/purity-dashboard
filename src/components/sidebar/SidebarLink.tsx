// "use client";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";

const SidebarLink = ({
    title = "Dashboard",
    href = "#",
    Icon,
    isSelected = false,
}: {
    title?: string;
    href?: string;
    Icon: IconType;
    isSelected?: boolean;
}) => {
    return (
        <Link
            href={href}
            className={`flex gap-4 items-center py-3 pl-6 lg:pr-10 xl:pr-16  ${isSelected && "bg-white rounded-2xl shadow-sm"
                }`}
        >
            <Icon
                className={`bg-sky-500 w-8 h-8 p-1.5 rounded-xl ${isSelected
                        ? "bg-sky-500 text-white"
                        : "bg-white text-sky-500"
                    } `}
            />

            <div
                className={`text-md font-bold mt-1 ${isSelected ? "text-kalo" : "text-dhusor"
                    }`}
            >
                {title}
            </div>
        </Link>
    );
};

export default SidebarLink;
