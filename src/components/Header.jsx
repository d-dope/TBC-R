import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser } from '@fortawesome/free-solid-svg-icons';
function Header() {
    const location = useLocation();

    return (
        <>
            <header className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-4 px-8">
                <div className="headerDiv flex justify-between items-center">
                <h1> <Link to={"/"}  className="text-2xl font-bold cursor-pointer">2rism</Link></h1>
                    <nav className="">
                        <ul className="flex gap-10">
                            <li className="mr-4">
                                <Link to={"/"} className={`text-white hover:text-gray-300 ${location.pathname === '/' ? 'font-black' : ''}`}>Home</Link>
                            </li>
                            <li className="mr-4">
                                <Link to={"/blogs"} className={`text-white hover:text-gray-300 ${location.pathname === '/blogs' ? 'font-black' : ''}`}>Blogs</Link>
                            </li>
                            <li className="mr-4">
                                <Link to={"/services"} className={`text-white hover:text-gray-300 ${location.pathname === '/services' ? 'font-black' : ''}`}>Services</Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className={`text-white hover:text-gray-300 ${location.pathname === '/contact' ? 'font-black' : ''}`}>Contact</Link>
                            </li>
                            <li>
                                <Link to={"/profile"}  className={`text-white hover:text-gray-300 ml-10 ${location.pathname === '/contact' ? 'font-black' : ''}`}>
                                        <FontAwesomeIcon icon={faUser} />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
