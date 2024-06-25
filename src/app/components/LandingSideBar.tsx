import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

//   @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LandingSideBar() {
  const t = useTranslations("LandingSideBar");

  const navigation = [
    {
      name: t("LatestEvents"),
      href: "#latest-events",
      icon: CalendarIcon,
      current: false,
    },
    {
      name: t("LatestBlogs"),
      href: "#latest-blogs",
      icon: DocumentDuplicateIcon,
      current: false,
    },
    {
      name: t("OurValues"),
      href: "#our-values",
      icon: ChartPieIcon,
      current: false,
    },
    {
      name: t("Partners"),
      href: "#partner-companies",
      icon: UsersIcon,
      current: false,
    },
  ];
  //   @ts-ignore

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="sm:flex sm:flex-1 sm:flex-col sm:mr-10 sm:gap-y-4  gap-y-4 mb-10"
      aria-label="Sidebar"
    >
      <ul
        role="list"
        className="flex  flex-wrap gap-5 sm:gap-y-1  sm:-mx-2 sm:space-y-5"
      >
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={classNames(
                item.current ? "" : "",
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
