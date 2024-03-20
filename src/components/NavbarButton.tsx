import Link from "next/link";

interface NavbarButtonProps {
    name: string;
    page: string;
}

export default function NavbarButton({ name, page }: NavbarButtonProps) {
    return (
        <Link
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group hover:bg-gradient-to-br from-[#e11d48] to-[#e11daa] group-hover:from-[#e11d48] group-hover:to-[#e11daa] dark:text-white transition-all duration-1000"
            href={page}
        >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-background  rounded-md ">
                {name}
            </span>
        </Link>
    );
}
