import ProjectsTable from "@/components/ProjectsTable";
import { GridItem } from "@/components/ui/GridItem";
import { projects } from "@/lib/fakeData";

export default function Home() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-2 sm:p-4 items-center">
            <GridItem className="min-h-32 col-span-1 sm:col-span-1 md:col-span-2">
                a
            </GridItem>
            <GridItem className="min-h-32 col-span-1 sm:col-span-1 md:col-span-2">
                b
            </GridItem>
            <GridItem className="min-h-32 col-span-1 sm:col-span-1 md:col-span-2">
                c
            </GridItem>
            <GridItem className="min-h-32 col-span-1 sm:col-span-1 md:col-span-2">
                d
            </GridItem>
            <GridItem className="min-h-80 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
                e
            </GridItem>
            <GridItem className="min-h-80 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3">
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
