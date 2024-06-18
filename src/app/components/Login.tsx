// pages/index.js
"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Login() {
  const { user, error } = useUser();

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <Link href="/api/auth/logout">Log Out</Link>
      </div>
    );
  }

  return <Link href="/api/auth/login">Login</Link>;
}
