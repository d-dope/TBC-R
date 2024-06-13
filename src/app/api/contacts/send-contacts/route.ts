import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, lastname, email, phone, message } = await request.json();

  try {
    if (!name || !lastname || !email || !phone || !message)
      throw new Error("Name, lastname, email, phone and message are required");

    await sql`INSERT INTO contacts (name, lastname, email, phone, message) VALUES (${name}, ${lastname}, ${email}, ${phone}, ${message});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const contacts = await sql`SELECT * FROM contacts;`;

  return NextResponse.json({ contacts }, { status: 200 });
}
