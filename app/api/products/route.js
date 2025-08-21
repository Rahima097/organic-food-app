import { NextResponse } from "next/server"
import { Product } from "../../../models/Product"

export async function GET() {
  try {
    const products = await Product.findAll()
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const productData = await request.json()
    const product = await Product.create(productData)
    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
