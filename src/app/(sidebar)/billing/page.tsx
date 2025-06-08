import BillingInformation from "@/components/billing/BillingInformation";
import Invoices from "@/components/billing/Invoices";
import PaymentMethod from "@/components/billing/PaymentMethod";
import Transactions from "@/components/billing/Transactions";
import BillingCard from "@/components/BillingCard";
import { GridItem } from "@/components/ui/GridItem";
import React from "react";
import { FaPaypal, FaWallet } from "react-icons/fa6";

const BillingPage = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-2 sm:p-4 items-center">
            <GridItem className="min-h-32 col-span-1 sm:col-span-1 md:col-span-2 xl:col-span-3">
                <BillingCard />
            </GridItem>
            <GridItem className="h-full">
                <div className="flex flex-col my-4 items-center">
                    <FaWallet className=" text-white bg-sky-500 p-3 size-12 rounded-xl m-4" />
                    <span className="font-bold">Salary</span>
                    <span className="text-xs font-bold text-dhusor">
                        Belong Interactive
                    </span>
                </div>
                {/* separator or dividor */}
                <div className="h-[2px] bg-linear-to-r from-gray-100 via-gray-400 to-gray-100 w-[90%] mx-auto my-4"></div>
                <p className="font-bold text-center">%2000</p>
            </GridItem>{" "}
            <GridItem className="h-full">
                <div className="flex flex-col my-4 items-center">
                    <FaPaypal className=" text-white bg-sky-500 p-3 size-12 rounded-xl m-4" />
                    <span className="font-bold">Salary</span>
                    <span className="text-xs font-bold text-dhusor">
                        Freelance Payment
                    </span>
                </div>
                {/* separator or dividor */}
                <div className="h-[2px] bg-linear-to-r from-gray-100 via-gray-400 to-gray-100 w-[90%] mx-auto my-4"></div>
                <p className="font-bold text-center">%4550</p>
            </GridItem>
            <GridItem className="h-full row-span-2 col-span-1 sm:col-span-1 md:col-span-2 xl:col-span-3">
                <Invoices />
            </GridItem>
            <GridItem className="col-span-5 h-36">
                <PaymentMethod />
            </GridItem>
            <GridItem className="col-span-4 h-full">
                <BillingInformation />
            </GridItem>
            <GridItem className="col-span-4 h-full">
                <Transactions />
            </GridItem>
        </div>
    );
};

export default BillingPage;
