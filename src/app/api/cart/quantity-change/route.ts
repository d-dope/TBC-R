import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { product_id, auth_id, action } = await request.json();

    console.log("product_id:", product_id);
    console.log("auth_id:", auth_id);
    console.log("action:", action);

    if (!product_id || !auth_id || !action) {
      return NextResponse.json(
        { message: "Missing required fields: product_id, auth_id, and action" },
        { status: 400 }
      );
    }

    // Determine the quantity change based on the action
    const quantityChange =
      action === "increment" ? 1 : action === "decrement" ? -1 : 0;
    if (quantityChange === 0) {
      return NextResponse.json(
        { message: "Invalid action. Use 'increment' or 'decrement'" },
        { status: 400 }
      );
    }
    console.log("clicking + : ", quantityChange);

    // Update the quantity in the cart
    const result = await sql`
      UPDATE cart
      SET quantity = quantity + ${quantityChange}
      WHERE auth_id = ${auth_id} AND product_id = ${product_id}
      RETURNING quantity
    `;

    if (result.rowCount === 0) {
      return NextResponse.json(
        { message: "No matching product found in cart" },
        { status: 404 }
      );
    }

    const updatedQuantity = result.rows[0].quantity;

    // If quantity drops to zero or below, delete the product from the cart
    if (updatedQuantity <= 0) {
      await sql`
        DELETE FROM cart
        WHERE auth_id = ${auth_id} AND product_id = ${product_id}
      `;
    }

    return NextResponse.json(
      { message: "Quantity updated successfully", updatedQuantity },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating quantity:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};