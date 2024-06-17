import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { title, description, price, date, category, picture_url } = await request.json();

  try {
    if (!title || !price) throw new Error("Title and price are required");

    // Format the date to dd-mm-yy
    const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').reverse().join('-');

    await sql`INSERT INTO products (title, description, price, date, category, picture_url) VALUES 
    (${title}, ${description}, ${price}, ${formattedDate}, ${category}, ${picture_url});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await sql`SELECT * FROM products;`;

  return NextResponse.json({ products }, { status: 200 });
}
