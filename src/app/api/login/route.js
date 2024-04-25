import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/app/constants";
export async function POST(request) {
  const { username, password } = await request.json();
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const user = await response.json();
  // const cookieStore = cookies();
  // cookieStore(AUTH_COOKIE_KEY, JSON.stringify(user.token));

//   const data = await response.json();

  if (response.ok) {
    cookies().set(AUTH_COOKIE_KEY, JSON.stringify(user.token));
  }
  return Response.json({ username, password });
}
