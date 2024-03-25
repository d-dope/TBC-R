import { Link } from "react-router-dom";

function Header() {
    

    return (
        <>
              <header className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-4 px-8">
          <div className="headerDiv flex justify-between items-center ">
            <h1 className="text-2xl font-bold cursor-pointer ">2rism</h1>
            <nav className="">
              <ul className="flex gap-10">
              <li className="mr-4"><Link to={"/"} className="text-white hover:text-gray-300">Home</Link></li>
                <li className="mr-4"><Link to={"/products"} className="text-white hover:text-gray-300">Products</Link></li>
                <li className="mr-4"><Link to={"/services"} className="text-white hover:text-gray-300">Services</Link></li>
                <li><Link to={"/contact"} className="text-white hover:text-gray-300">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        </>
    )
}

export default Header;
