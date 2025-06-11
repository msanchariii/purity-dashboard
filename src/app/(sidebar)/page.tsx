import ProjectsTable from "@/components/ProjectsTable";
import { GridItem } from "@/components/ui/GridItem";
import { projects } from "@/lib/fakeData";

import StatCard, { stats } from "@/components/dashboard/StatCard";
import { FaArrowRight, FaSuperpowers } from "react-icons/fa";
import OrdersOverview from "@/components/dashboard/OrdersOverview";
import DashboardAreaChart from "@/components/dashboard/DashboardAreaChart";
import GradientBarChart from "@/components/dashboard/GradientBarChart";
export default function Home() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-2 sm:p-4 items-center">
            {stats.map((stat, index) => (
                <GridItem
                    key={index}
                    className=" col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2"
                >
                    <StatCard stat={stat} />
                </GridItem>
            ))}

            <GridItem className=" col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 ">
                <div
                    className={`flex items-center justify-between p-5 rounded-lg`}
                >
                    <div className="flex flex-col gap-y-1 basis-2/3">
                        <p className="text-sm font-semibold text-dhusor  ">
                            Purity UI Dashboard
                        </p>
                        <h3 className="font-bold text-kalo">
                            Built by Developers
                        </h3>
                        <p className="text-sm text-dhusor">
                            From colors, cards, typography to complex elements,
                            you will find the full documentation.
                        </p>
                        <p className={`text-xl font-bold text-kalo`}></p>
                        <button className="text-left cursor-pointer mt-12 hover:underline flex items-center gap-3">
                            Read More <FaArrowRight className="" />
                        </button>
                    </div>
                    <div className=" text-white bg-sky-500 p-4 rounded-2xl basis-1/3 aspect-square flex items-center justify-center text-3xl font-bold space-x-2">
                        {/* Icon can be placed here if needed */}
                        <FaSuperpowers />
                        <h1>Sanchari</h1>
                    </div>
                </div>
            </GridItem>
            <GridItem className="relative h-full outline-8 outline-white col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 bg-[url(/assets/people-image.webp)] bg-center bg-no-repeat bg-cover">
                {/* Overlay */}
                <span className="absolute inset-0 z-10 bg-linear-to-b from-white/5 to-black/60 rounded-3xl"></span>

                <div className="p-8 text-white h-full relative z-50 space-y-4">
                    <h3 className="text-xl font-medium">
                        Work with the rockets
                    </h3>
                    <p className=" text-sm pr-2">
                        Wealth creation is a revolutionary recent positive-sum
                        game. It is all about who takes the opportunity first.
                    </p>
                    <button className="absolute ledt-0 bottom-[10%] flex items-center gap-2 cursor-pointer hover:underline">
                        Read More <FaArrowRight className="" />
                    </button>
                </div>
            </GridItem>

            <GridItem className="h-full col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 py-6">
                <div className="ml-4 mb-2">
                    <h3 className="text-lg font-semibold">Active Users</h3>
                    <p className="text-sm text-green-500 font-medium">
                        +23% than last week
                    </p>
                </div>
                <div className="rounded-2xl p-4">
                    <GradientBarChart />
                </div>
            </GridItem>
            <GridItem className="h-full col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 py-6">
                <div>
                    <h3 className="font-semibold text-lg ml-8">
                        Sales Overview
                    </h3>
                    <p className="text-sm text-green-500 font-medium ml-8 mb-2">
                        5% more in 2021
                    </p>
                </div>
                <DashboardAreaChart />
            </GridItem>
            <GridItem className="h-full col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-6">
                <ProjectsTable projects={projects} />
            </GridItem>
            <GridItem className="h-full col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
                <OrdersOverview />
            </GridItem>
        </div>
    );
}
