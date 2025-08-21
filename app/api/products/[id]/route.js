import { NextResponse } from "next/server"
import { Product } from "../../../../models/Product"

export async function GET(request, { params }) {
  try {
    const product = await Product.findById(params.id)
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }
    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    const updateData = await request.json()
    await Product.update(params.id, updateData)
    const updatedProduct = await Product.findById(params.id)
    return NextResponse.json(updatedProduct)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    await Product.delete(params.id)
    return NextResponse.json({ message: "Product deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
