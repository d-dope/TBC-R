import image6 from "../../../public/assets/6Instagram_icon.png.webp";
import image7 from "../../../public/assets/7Facebook-Logosu.png";
import image8 from "../../../public/assets/8LinkedIn_logo_initials.png";
import image9 from "../../../public/assets/9.jpg";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Navigation from "./Navigation";
export default function Footer() {
  const t = useTranslations('Navigation')
  return (
    <>
      <footer className="bg-gradient-to-r from-sky-500 to-indigo-500 py-4 flex items-center mt-2">
        <div className="container mx-auto">
          <ul className="flex mb-8 justify-center gap-20 mt-0">
              <Navigation/>
          </ul>
          <div className="flex justify-between items-center px-24 ">
            <ul className="flex">
              <li className="mr-4">
                <a href="/terms" className="text-white hover:text-gray-300">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-white hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
            </ul>

            <div className="text-center ">
              {/* <h3 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h3> */}
              <form className="">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 border border-gray-300 rounded-l-md"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-r-md"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="flex">
              <Image
                src={image6}
                alt="Logo 2"
                className="h-8 w-8 cursor-pointer"
              />
              <Image
                src={image7}
                alt="Logo 2"
                className="h-8 w-16 cursor-pointer"
              />
              <Image
                src={image8}
                alt="Logo 1"
                className="h-8 w-8 mr-4 cursor-pointer"
              />
              <Image
                src={image9}
                alt="Logo 2"
                className="h-8 w-8 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
