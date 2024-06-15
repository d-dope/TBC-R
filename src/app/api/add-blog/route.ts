import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { id, title, description, picture_url, added_on } =
    await request.json();

  try {
    if (!title || !description) throw new Error("Name and email are required");

    await sql`INSERT INTO blogs (id, title, description, picture_url, added_on ) VALUES 
    (${title}, ${description}, ${picture_url}, ${id}, ${added_on}, ${picture_url});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const blogs = await sql`SELECT * FROM blogs;`;

  return NextResponse.json({ blogs }, { status: 200 });
}
