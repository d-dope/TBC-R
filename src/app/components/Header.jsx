import Link from "next/link";
import Navigation from "./Navigation";
import LogOut from "./LogOut";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-4 px-8">
      <div className="headerDiv flex justify-between items-center">
        <h1>
          {" "}
          <Link href="/" className="text-2xl font-bold cursor-pointer">
            2rism
          </Link>
        </h1>

        <div className="flex gap-8 items-center">
          <Navigation layout="flex-row" />
          <LogOut />
        </div>
      </div>
    </header>
  );
};

export default Header;
