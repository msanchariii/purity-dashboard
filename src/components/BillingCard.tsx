import React from "react";
import { SiMastercard } from "react-icons/si";

const BillingCard = () => {
    return (
        <div className="rounded-2xl overflow-hidden max-w-md aspect-video bg-[url(/assets/CardBG.jpg)] bg-no-repeat bg-cover p-6  shadow-sm space-y-4">
            <div className="flex items-center justify-between">
                <span className="font-bold text-white">Purity UI</span>
                <SiMastercard className="size-12 text-[#a0aec0]" />
            </div>
            <div className="text-white space-y-4 mt-[15%]">
                <div className="text-white text-xl font-bold tracking-wider">
                    7812 2139 0823 XXXX
                </div>
                <div className="flex gap-6 text-sm font-medium text-white/80">
                    <div>VALID THRU</div>
                    <div className="flex flex-col">
                        <span>CVV</span>
                        <span className="">123</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillingCard;
