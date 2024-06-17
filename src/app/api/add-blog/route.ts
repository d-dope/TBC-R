import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { title, description, picture_url } = await request.json();

  try {
    if (!title || !description) throw new Error("Name and email are required");

    await sql`INSERT INTO blogs (title, description, picture_url ) VALUES 
    (${title}, ${description}, ${picture_url});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const blogs = await sql`SELECT * FROM blogs;`;

  return NextResponse.json({ blogs }, { status: 200 });
}
