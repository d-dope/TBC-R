import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const res = await sql`DELETE FROM cart WHERE auth_id = ${id};`;
    return NextResponse.json(
      { message: "Cart reset successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error resetting cart:", error); // Debug log
    return NextResponse.json({ error }, { status: 500 });
  }
}
