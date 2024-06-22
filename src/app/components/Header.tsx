"use client";
import { useEffect, useState, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LocalSwitcher from "./LocalSwitcher";
import ThemeSwitch from "./ThemeSwitch";
import { useTranslations } from "next-intl";
import Auth from "./Auth";
import imageLogo from "../../../public/assets/Untitlemebbbbbbbbbbbd-removebg-preview.png";
import Image from "next/image";
import { TicketIcon } from "@heroicons/react/20/solid";
import { useUser } from "@auth0/nextjs-auth0/client";

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { user } = useUser();
  const isAdmin = Array.isArray(user?.role) && user.role.includes("Admin");
  const t = useTranslations("Navigation");

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("Products"), href: "/products" },
    { name: t("Blogs"), href: "/blogs" },
    { name: t("Contact"), href: "/contact" },
    ...(user ? [{ name: t("Profile"), href: "/profile" }] : []),
    ...(isAdmin ? [{ name: t("Admin"), href: "/admin/add" }] : []),
  ];

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPath, setCurrentPath] = useState("");

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // if scrolling down and past 100px
        setShowHeader(false);
      } else {
        // if scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "bg-white fixed w-full z-10 transition-transform duration-300",
        showHeader ? "translate-y-0" : "-translate-y-full"
      )}
    >
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <Image
                      src={imageLogo}
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={`item-generate-${item.name}`}
                      href={item.href}
                      className={classNames(
                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                        currentPath === item.href
                          ? "border-primaryColor text-gray-900"
                          : "border-transparent text-gray-900 hover:border-gray-300 hover:text-gray-700"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <LocalSwitcher />
                <button
                  type="button"
                  className="relative ml-3 rounded-full bg-gray-200 p-1 text-gray-400 border border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                  onClick={() => {
                    if (!user) {
                      window.location.href = "/api/auth/login";
                    } else {
                      window.location.href = "/cart";
                    }
                  }}
                >
                  <span className="sr-only">View cart</span>
                  <TicketIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-400">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {user ? (
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={user.picture || ""}
                          alt="User profile picture"
                          height={100}
                          width={100}
                        />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="0.9"
                          stroke="black"
                          className="h-10 w-10 opacity-40 rounded-full focus:outline-none hover:opacity-65"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 flex flex-col items-center z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-9 py-2 text-sm text-gray-700"
                            )}
                          >
                            <Auth />
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-14 cursor-pointer py-2 text-sm text-gray-700"
                            )}
                          >
                            <ThemeSwitch />
                          </a>
                        )}
                      </Menu.Item>
                      {isAdmin && (
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/admin/add"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Add Product
                            </a>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center lg:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryColor">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={`item-generate-${item.name}`}
                  as="a"
                  href={item.href}
                  className={classNames(
                    "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                    currentPath === item.href
                      ? "border-primaryColor text-gray-900 bg-gray-50"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <Image
                    className="h-10 w-10 rounded-full"
                    src={user?.picture || ""}
                    alt="User profile picture"
                    height={100}
                    width={100}
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {user?.nickname || "User"}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user?.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-8 rounded-full bg-gray-200 p-1 text-gray-400 border border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                  onClick={() => {
                    if (!user) {
                      window.location.href = "/api/auth/login";
                    } else {
                      window.location.href = "/cart";
                    }
                  }}
                >
                  <span className="sr-only">View cart</span>
                  <TicketIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  <Auth />
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  className="block px-4 py-2 cursor-pointer text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  <ThemeSwitch />
                </Disclosure.Button>
                {isAdmin && (
                  <Disclosure.Button
                    as="a"
                    href="/admin/add"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Add Product
                  </Disclosure.Button>
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
