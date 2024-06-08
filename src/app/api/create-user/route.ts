import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email } = await request.json();

  try {
    if (!name || !email) throw new Error("Name and email are required");

    await sql`INSERT INTO users (name, email) VALUES (${name}, ${email});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;

  return NextResponse.json({ users }, { status: 200 });
}

// import { sql } from "@vercel/postgres";
// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const name = searchParams.get("name");
//   const email = searchParams.get("email");

//   try {
//     if (!name || !email) throw new Error("Pet and owner names required");
//     await sql`INSERT INTO Pets (name, email) VALUES (${name}, ${email});`;
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }

//   const pets = await sql`SELECT * FROM Pets;`;
//   return NextResponse.json({ pets }, { status: 200 });
// }
