import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { title, description, price, sale, category, picture_url } =
    await request.json();

  try {
    if (!title || !price) throw new Error("Name and email are required");

    await sql`INSERT INTO products (title, description, price, sale, category, picture_url) VALUES 
    (${title}, ${description}, ${price}, ${sale}, ${category}, ${picture_url});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await sql`SELECT * FROM products;`;

  return NextResponse.json({ products }, { status: 200 });
}
