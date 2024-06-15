import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { product_id, auth_id, quantity } = await request.json();

    if (!product_id || !auth_id || quantity === undefined) {
      return NextResponse.json(
        {
          message: "Missing required fields: product_id, auth_id, and quantity",
        },
        { status: 400 }
      );
    }

    // Log the received data
    console.log("Received data:", { product_id, auth_id, quantity });

    // Check if the product exists
    const productExists = await sql`
      SELECT id FROM products 
      WHERE id = ${product_id}
    `;

    if (productExists.rowCount === 0) {
      console.log("Product does not exist:", product_id);
      return NextResponse.json(
        { message: "Product does not exist" },
        { status: 400 }
      );
    }

    // Check if the user already has this product in the cart
    const existingCartProduct = await sql`
      SELECT id, quantity FROM cart 
      WHERE auth_id = ${auth_id} AND product_id = ${product_id}
    `;

    if (existingCartProduct.rowCount > 0) {
      // Update the quantity if the product already exists in the cart
      const updatedQuantity = existingCartProduct.rows[0].quantity + quantity;
      await sql`
        UPDATE cart
        SET quantity = ${updatedQuantity}
        WHERE id = ${existingCartProduct.rows[0].id}
      `;

      console.log("Cart updated successfully for auth_id:", auth_id);
      return NextResponse.json(
        { message: "Cart updated successfully" },
        { status: 200 }
      );
    } else {
      // Insert the product into the cart with the specified quantity
      await sql`
        INSERT INTO cart (auth_id, product_id, quantity)
        VALUES (${auth_id}, ${product_id}, ${quantity})
      `;

      console.log("Product added to cart successfully for auth_id:", auth_id);
      return NextResponse.json(
        { message: "Product added to cart successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
