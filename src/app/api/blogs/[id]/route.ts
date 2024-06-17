import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/").pop(); // Correctly extract ID

  try {
    if (!id) throw new Error("ID is required");
    const result = await sql`SELECT * FROM blogs WHERE id = ${Number(id)}`;
    const singleBlog = result.rows[0]; // Get the first row

    if (!singleBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(singleBlog, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
