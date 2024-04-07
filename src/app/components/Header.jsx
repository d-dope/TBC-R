'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ProfileIcon from './ProfileIcon'

export default function Header() {
    const pathname = usePathname()

    return (
        <>
            <header className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-4 px-8">
                <div className="headerDiv flex justify-between items-center">
                <h1> <Link href="/"  className="text-2xl font-bold cursor-pointer">2rism</Link></h1>
                    <nav className="">
                        <ul className="flex gap-10 items-center">
                            <li className="mr-4">
                                <Link href="/" className={`text-white hover:text-gray-300 ${pathname === '/' ? 'font-black' : ''}`}>Home</Link>
                            </li>
                            <li className="mr-4">
                                <Link href="/blogs" className={`text-white hover:text-gray-300 ${pathname === '/blogs' ? 'font-black' : ''}`}>Blogs</Link>
                            </li>
                            <li className="mr-4">
                                <Link href="/services" className={`text-white hover:text-gray-300 ${pathname === '/services' ? 'font-black' : ''}`}>Services</Link>
                            </li>
                            <li>
                                <Link href="/contact" className={`text-white hover:text-gray-300 ${pathname === '/contact' ? 'font-black' : ''}`}>Contact</Link>
                            </li>
                            <li className='flex items-center'>
                                <Link href="/profile"  className={`text-white hover:text-gray-300 ml-10 ${pathname === '/contact' ? 'font-black' : ''}`}>
                                       <ProfileIcon/>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}




// 'use client'
 
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
 
// export function Header() {
//   const pathname = usePathname()
 
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             className={`link ${pathname === '/blogs' ? 'active' : ''}`}
//             href="/blogs"
//           >
//             About
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   )
// }
// export default Header;