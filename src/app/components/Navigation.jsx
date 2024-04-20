import Link from "next/link";

const Navigation = ({ layout }) => {
    return (
        <nav className="w-full lg:max-w-fit lg:bg-transparent ">
            <ul className={"flex w-full h-full justify-end items-start text-medium gap-3 lg:gap-5 " + layout}>
                <li className="cursor-pointer">
                    <Link href="/"
                        className="hover:text-orange leading-[25px] transition duration-300 ease-linear"

                    >
                        Home
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <Link href="/blogs"
                        className="hover:text-orange leading-[25px] transition duration-300 ease-linear"

                    >
                        Blogs
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <Link href="/contact"
                        className="hover:text-orange leading-[25px] transition duration-300 ease-linear"

                    >
                        Contact
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <Link href="/profile"
                        className="hover:text-orange leading-[25px] transition duration-300 ease-linear"

                    >
                        Profile
                    </Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navigation;