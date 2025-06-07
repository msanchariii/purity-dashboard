import Link from 'next/link'
import React from 'react'
import { FaHouseChimney } from 'react-icons/fa6'

const DashboardIcon = ({ isSelected = false }) => {
    return (
        <Link href='#' className={`flex gap-6 items-center ${isSelected && 'bg-white py-3 pl-6 pr-16 rounded-2xl shadow-sm'}`}>
            <div className={`flex items-center justify-center w-10 h-10 rounded-2xl shadow-sm  ${isSelected ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}>
                <FaHouseChimney />
            </div>
            <span className={`text-lg font-semibold text-kalo mt-1 ${isSelected ? 'text-kalo' : 'text-dhusor'}`}>Dashboard</span>
        </Link>
    )
}

export default DashboardIcon
