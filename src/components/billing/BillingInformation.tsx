import React from "react";

type BillingInformation = {
    name: string;
    company: string;
    email: string;
    vatNumber: string;
};

const billingInformationPlaceholder: BillingInformation[] = [
    {
        name: "John Doe",
        company: "Doe Enterprises",
        email: "johndoe@gmail.com",
        vatNumber: "VAT123456789",
    },
    {
        name: "Jane Smith",
        company: "Smith Solutions",
        email: "janesmith@.com",
        vatNumber: "VAT987654321",
    },
    {
        name: "Alice Johnson",
        company: "Johnson Innovations",
        email: "alicejohnson@gmail.com",
        vatNumber: "VAT456789123",
    },
];

const BillingInformation = ({}) => {
    return (
        <div className="p-6 ">
            <h3 className="mb-8 font-bold text-lg">Billing Information</h3>
            <div>
                {billingInformationPlaceholder.map((info, index) => (
                    <div
                        key={index}
                        className="p-4 mb-8 bg-gray-100/50 rounded-2xl text-xs font-medium space-y-1 text-dhusor"
                    >
                        <h3 className="text-lg text-dhusor font-bold">
                            {info.name}
                        </h3>
                        <p className="font-bold">
                            COMPANY NAME:{" "}
                            <span className="text-gray-600">
                                {info.company}
                            </span>
                        </p>
                        <p className="text-xs font-bold ">
                            EMAIL ADDRESS:{" "}
                            <span className=" text-gray-600">{info.email}</span>
                        </p>
                        <p className="text-xs font-bold ">
                            VAT NUMBER:{" "}
                            <span className=" text-gray-600">
                                {info.vatNumber}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BillingInformation;
