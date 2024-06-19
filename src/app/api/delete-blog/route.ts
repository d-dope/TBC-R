import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const blogs = await sql`DELETE FROM blogs WHERE id = ${id}`;
    const response = blogs.rows;
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
