/* eslint-disable @next/next/no-async-client-component */
"use client";

import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { User, getUsers } from "../../../../../api";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const { user } = useUser();
  const isAdmin = Array.isArray(user?.role) && user.role.includes("Admin");

  const fetchUsers = async () => {
    const fetchedUsers = await getUsers();
    setUsers(fetchedUsers);
  };

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";

    try {
      const response = await fetch("/api/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        await fetchUsers(); // Fetch the updated list of users
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleDeleteUser = async (userId: number) => {
    try {
      const response = await fetch(`/api/delete-user/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchUsers(); // Fetch the updated list of users after successful deletion
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Fetch the initial list of users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);
  if (!isAdmin) {
    return <h1>You Are Not Admin Retard!</h1>;
  }
  return (
    <div className="px-5">
      <form
        onSubmit={handleCreateUser}
        className="flex flex-col gap-4 w-[300px] text-black"
      >
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <button type="submit" className="bg-red-300 text-white">
          Create User
        </button>
      </form>

      {users.map((user: User) => (
        <div className="flex justify-between border-b" key={user.id}>
          <div className="flex gap-4 border-b">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
          <button
            onClick={() => handleDeleteUser(user.id)}
            className="bg-red-300 text-white"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
