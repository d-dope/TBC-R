import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#dashboard", icon: HomeIcon, current: true },
  {
    name: "Latest Events",
    href: "#latest-events",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Latest Blogs",
    href: "#latest-blogs",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "Our Values",
    href: "#our-values",
    icon: ChartPieIcon,
    current: false,
  },
  {
    name: "Partner Companies",
    href: "#partner-companies",
    icon: UsersIcon,
    current: false,
  },
];
//   @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LandingSideBar() {
  //   @ts-ignore

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="flex flex-1 flex-col mr-10 gap-y-4" aria-label="Sidebar">
      <ul role="list" className="-mx-2 space-y-5">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={classNames(
                item.current
                  ? "bg-gray-50 text-primaryColor"
                  : "text-gray-700 hover:bg-gray-50 hover:text-primaryColor",
                "group flex gap-x-3 rounded-md p-2 pl-3 w-40 text-sm font-semibold leading-6"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-primaryColor"
                    : "text-primaryColor group-primaryColor:text-primaryColor",
                  "h-6 w-6 shrink-0"
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
