export type Author = {
    name: string;
    email: string;
    jobTitle: string;
    department: string;
    employedOn: string;
    status: "Online" | "Offline";
};

export const authors: Author[] = [
    {
        name: "John Doe",
        email: "johndoe@gmail.com",
        jobTitle: "Software Engineer",
        department: "Engineering",
        employedOn: "2022-01-15",
        status: "Online",
    },
    {
        name: "Jane Smith",
        email: "janesmith@gmail.com",
        jobTitle: "Product Manager",
        department: "Product",
        employedOn: "2021-03-22",
        status: "Offline",
    },
    {
        name: "Alice Johnson",
        email: "alicejhonson@gmail.com",
        jobTitle: "UX Designer",
        department: "Design",
        employedOn: "2020-07-30",
        status: "Online",
    },
    {
        name: "Bob Brown",
        email: "bobrown@gmail.com",
        jobTitle: "Data Scientist",
        department: "Data",
        employedOn: "2019-11-05",
        status: "Online",
    },
];
