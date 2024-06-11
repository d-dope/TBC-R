"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Auth() {
  const { user, error, isLoading } = useUser();
  console.log(user);
  if (isLoading) return <div>Loading...</div>;
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
          className="text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/api/auth/login"
      className="text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    >
      Login
    </Link>
  );
}
