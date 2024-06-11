import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.replace('/api/delete-user/', '');

  try {
    if (!id) throw new Error('ID is required');

    const deletedUser = await sql`
      DELETE FROM users
      WHERE id = ${Number(id)}
      RETURNING *;
    `;

    return NextResponse.json({ deletedUser }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}