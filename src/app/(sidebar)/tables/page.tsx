import AuthorsTable from "@/components/AuthorsTable";
import ProjectsTable from "@/components/ProjectsTable";
import { authors, projects } from "@/lib/fakeData";
import React from "react";

const TablesPage = () => {
    return (
        <div className="space-y-8">
            <AuthorsTable authors={authors} />
            <ProjectsTable projects={projects} />
        </div>
    );
};

export default TablesPage;
