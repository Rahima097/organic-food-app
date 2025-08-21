import clientPromise from "../lib/mongodb"
import { ObjectId } from "mongodb"

export class Product {
  static async create(productData) {
    const client = await clientPromise
    const db = client.db("organic_store")
    const collection = db.collection("products")

    const product = {
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await collection.insertOne(product)
    return { ...product, _id: result.insertedId }
  }

  static async findAll() {
    const client = await clientPromise
    const db = client.db("organic_store")
    const collection = db.collection("products")

    const products = await collection.find({}).toArray()
    return products
  }

  static async findById(id) {
    const client = await clientPromise
    const db = client.db("organic_store")
    const collection = db.collection("products")

    const product = await collection.findOne({ _id: new ObjectId(id) })
    return product
  }

  static async update(id, updateData) {
    const client = await clientPromise
    const db = client.db("organic_store")
    const collection = db.collection("products")

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...updateData, updatedAt: new Date() } },
    )

    return result
  }

  static async delete(id) {
    const client = await clientPromise
    const db = client.db("organic_store")
    const collection = db.collection("products")

    const result = await collection.deleteOne({ _id: new ObjectId(id) })
    return result
  }
}
