import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/get-product/", "");

  try {
    if (!id) throw new Error("ID is required");
    const singleProd = await sql`SELECT * FROM products WHERE id = ${Number(
      id
    )}`;
    return NextResponse.json({ singleProd }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
