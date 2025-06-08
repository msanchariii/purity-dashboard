import React from 'react'
import { FaSearch } from 'react-icons/fa'

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div>
                <FaSearch />
                <input type="text" placeholder='type here...' />
            </div>
        </div>
    )
}

export default page
