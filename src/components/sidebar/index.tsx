"use client";
import React from "react";
import SidebarLink from "./SidebarLink";
import { FaFilePen, FaHouseChimney } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { MdBarChart, MdManageAccounts } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { usePathname } from "next/navigation";

// links
const sidebarLinks = {
    main: [
        {
            title: "Dashboard",
            icon: FaHouseChimney,
            href: "/",
        },
        {
            title: "Tables",
            icon: MdBarChart,
            href: "/tables",
        },
        {
            title: "Billing",
            icon: IoCard,
            href: "/billing",
        },
    ],
    accountPages: [
        {
            title: "Profile",
            icon: MdManageAccounts,
            href: "/profile",
        },
        {
            title: "Sign In",
            icon: FaFilePen,
            href: "/signin",
        },
        {
            title: "Sign Up",
            icon: IoIosRocket,
            href: "/signup",
        },
    ],
};

const Sidebar = ({ className }: { className?: string | undefined | null }) => {
    const pathname = usePathname();
    const showAccountPages = false; // Change this to true if you want to show account pages
    console.log("Current Pathname:", pathname);
    return (
        <div className={`h-screen p-8 space-y-8 ${className}`}>
            <div>
                <h1 className="font-bold text-lg">Purity UI Dashboard</h1>
            </div>
            <div className="space-y-4">
                {sidebarLinks.main.map((link, index) => (
                    <SidebarLink
                        key={index}
                        title={link.title}
                        Icon={link.icon}
                        href={link.href}
                        isSelected={pathname === link.href}
                    />
                ))}
                {/* <SidebarLink  /> */}
            </div>
            {showAccountPages && (
                <div className="space-y-4">
                    <h2 className="pl-6 text-lg font-bold">Account Pages</h2>
                    {sidebarLinks.accountPages.map((link, index) => (
                        <SidebarLink
                            key={index}
                            title={link.title}
                            Icon={link.icon}
                            href={link.href}
                            isSelected={pathname === link.href}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sidebar;
