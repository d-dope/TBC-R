"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Auth() {
  const t = useTranslations("Auth");

  const { user, error } = useUser();
  if (error) return <div>{error.message}</div>;

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      window.location.href = "/api/auth/logout";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  if (user) {
    return (
      <div>
        <button
          onClick={handleLogout}
          className=" leading-7 text-sm  text-gray-700 dark:text-gray-300"
        >
          {t("Logout")}
        </button>
      </div>
    );
  }

  return (
    <Link href="/api/auth/login" className="text-sm leading-7 text-white">
      {t("Login")}
    </Link>
  );
}
