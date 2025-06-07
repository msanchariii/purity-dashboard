import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="flex justify-between text-dhusor py-4 mt-6">
            <p className="text-lg">
                &copy; {new Date().getFullYear()} Built with ❤️ using React and
                Tailwind CSS.
            </p>
            <div className="text-lg mt-2 space-x-6 font-medium">
                <Link href={""}>Creative Tim</Link>
                <Link href={""} className="ml-4">
                    Github
                </Link>{" "}
                <Link href={""} className="ml-4">
                    License
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
