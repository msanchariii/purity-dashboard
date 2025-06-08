"use client";

import { log } from "console";
import { usePathname } from "next/navigation";

const BreadCrumbs = () => {
    const pathName = usePathname()
    const pathParts = pathName.split('/').filter(part => part);
    // console.log(`Path Parts: ${pathParts}`);

    return (
        <div>
            {pathParts.map((part, index) => {
                const isLast = index === pathParts.length - 1;  
                const href = '/' + pathParts.slice(0, index + 1).join('/');
                return (
                    <span key={index}>
                        <a href={href} className={`text-dhusor capitalize ${isLast ? 'font-bold' : ''}`}>

                            
                            {part}
                            {isLast ? null : ' / '}

                        </a>
                    </span>
                );
            })}
        </div>
    )
}

export default BreadCrumbs
