import React from "react";
import { MdEdit } from "react-icons/md";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";

const PaymentMethod = () => {
    return (
        <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
                <h4 className="font-bold text-lg">Payment Method</h4>
                <button className="text-xs font-medium bg-blue-950 py-3 px-4 text-white rounded-xl hover:bg-blue-900 transition duration-200 cursor-pointer">
                    Add New Card
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
                <div className="flex justify-between items-center mb-4 border border-gray-300 rounded-3xl pl-2 pr-3 focus-within:ring-sky-500 focus-within:ring-4 ">
                    <RiMastercardFill className="text-orange-500 py-2 size-12 rounded-xl" />
                    <input
                        type="text"
                        disabled
                        value={"7812 2139 0823 XXXX"}
                        className="pl-2 w-full font-semibold text-dhusor bg-transparent focus:outline-none"
                    />
                    <MdEdit className="text-gray-500 cursor-pointer hover:text-gray-700 transition duration-200" />
                </div>
                <div className="flex justify-between items-center mb-4 border border-gray-300 rounded-3xl pl-2 pr-3 focus-within:ring-sky-500 focus-within:ring-4 ">
                    <RiVisaLine className="text-blue-500 py-2 size-12 rounded-xl" />
                    <input
                        type="text"
                        disabled
                        value={"7812 2139 0823 XXXX"}
                        className="pl-2 w-full font-semibold text-dhusor bg-transparent focus:outline-none"
                    />
                    <MdEdit className="text-gray-500 cursor-pointer hover:text-gray-700 transition duration-200" />
                </div>
            </div>
            {/* <div className="grid grid-cols-2"> */}

            {/* </div> */}
        </div>
    );
};

export default PaymentMethod;
