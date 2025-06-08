import ProjectsTable from "@/components/ProjectsTable";
import { GridItem } from "@/components/ui/GridItem";
import { projects } from "@/lib/fakeData";

import StatCard, { stats } from "@/components/dashboard/StatCard";
import { FaSuperpowers } from "react-icons/fa";
export default function Home() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-2 sm:p-4 items-center">


            {stats.map((stat, index) => (
                <GridItem key={index} className=" col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
                    <StatCard stat={stat} />
                </GridItem>
            ))}


            <GridItem className=" col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 ">
                <div className={`flex items-center justify-between p-5 rounded-lg`}>
                    <div className="flex flex-col gap-y-1 basis-2/3">
                        <h3 className="text-md font-semibold text-dhusor  ">

                        </h3>
                        <p className={`text-xl font-bold text-kalo`}>

                        </p>
                    </div>
                    <div className=" text-white bg-sky-500 p-4 rounded-2xl basis-1/3 aspect-square flex items-center justify-center text-3xl font-bold">
                        {/* Icon can be placed here if needed */}
                        <FaSuperpowers/>
                        Sanchari's UI
                    </div>

                </div>
            </GridItem>
            <GridItem className="h-full col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3">
                f
            </GridItem>
            <GridItem className="min-h-80 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3">
                g
            </GridItem>
            <GridItem className="min-h-80 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
                h
            </GridItem>
            <GridItem className="min-h-96 col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-6">
                <ProjectsTable projects={projects} />
            </GridItem>
            <GridItem className="min-h-96 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
                j
            </GridItem>
        </div>
    );
}
