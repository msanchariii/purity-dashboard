import AuthorsTable from "@/components/AuthorsTable";
import { authors } from "@/lib/fakeData";
import React from "react";

const TablesPage = () => {
    return (
        <div>
            <AuthorsTable authors={authors} />
        </div>
    );
};

export default TablesPage;
