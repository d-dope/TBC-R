import { sql } from "@vercel/postgres";
import { NextRequest } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export async function GET(_: NextRequest) {
  try {
    const session = await getSession();

    if (session?.user) {
      const { email, sub, picture } = session.user;

      const user = await sql`SELECT * FROM authusers WHERE id = ${sub}`;

      if (!user.rows.length)
        await sql`INSERT INTO authusers (id, email, img) VALUES (${sub}, ${email}, ${picture});`;

      // console.log(user, "user");
      // const userId = user.rows[0].id;

      const users =
        await sql`SELECT serial_id FROM authusers ORDER BY serial_id DESC LIMIT 1;`;
      const userId = users.rows[0].serial_id;
      // console.log(userId, "aidiii");
      const cartEntry =
        await sql`SELECT * FROM carts WHERE user_id = ${userId};`;

      if (!cartEntry.rows.length) {
        await sql`
          INSERT INTO carts (user_id, products)
          VALUES (${userId}, '{}');
        `;
      }
    } else {
      //   return redirect("/api/auth/logout");
    }
  } catch (error) {
    // return redirect("/api/auth/logout");
  }

  return redirect("/");
}
