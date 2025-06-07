import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

import React, { ReactNode } from "react";
import Footer from "@/components/Footer";

const SideBarLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex">
            <Sidebar
                className={`hidden lg:block basis-1/6 fixed top-0 left-0 h-screen`}
            />
            <main className="ml-0 lg:ml-[16.7%] basis-full lg:basis-5/6 py-8 px-12">
                <Header />
                {children}
                <Footer />
            </main>
        </div>
    );
};

export default SideBarLayout;
