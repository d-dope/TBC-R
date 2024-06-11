"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Auth() {
  const { user, error, isLoading } = useUser();

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
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return <Link href="/api/auth/login">Login</Link>;
}
