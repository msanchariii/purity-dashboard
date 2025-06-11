import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import { FaUser } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch, IoMdNotifications, IoMdSettings } from "react-icons/io";

const index = () => {
    return (
        <div className="mb-6 flex items-center justify-between px-4 ">
            <BreadCrumbs />
            <div className="flex items-center justify-end  ">
                <div className="border-2 border-gray-300 bg-white rounded-3xl flex items-center px-2 py-1 transition-all duration-200 ease-in-out focus-within:border-sky-500 focus-within:border-2 h-12  mr-4">
                    <IoIosSearch size={25} />
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="p-1 w-52  border-none outline-none text-grey-200  font-medium"
                    ></input>
                </div>

                <div className="flex items-center gap-6 ml-4 text-gray-500">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <FaUser className="size-5" />
                        <a href="#" className="text-lg font-bold">
                            Sign In
                        </a>
                    </div>
                    {/* <GiHamburgerMenu /> */}
                    <IoMdSettings className="size-5" />
                    <IoMdNotifications className="size-5" />
                </div>
            </div>
        </div>
    );
};

export default index;
