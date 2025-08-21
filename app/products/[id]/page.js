"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ProductDetailPage({ params }) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`)
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen">
        <main className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading product...</p>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <main className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
              <Link href="/products">
                <div className="px-6 py-3 text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors cursor-pointer inline-block">
                  Back to Products
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen">

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-xl text-gray-600 mb-6">{product.description}</p>
                <div className="text-3xl font-bold text-green-600 mb-6">${product.price}</div>
              </div>

              <div className="space-y-4">
                <div className="px-8 py-3 text-lg font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors cursor-pointer text-center w-full lg:w-auto">
                  Add to Cart
                </div>
                <Link href="/products">
                  <div className="px-8 py-3 text-lg font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-50 transition-colors cursor-pointer text-center w-full lg:w-auto lg:ml-4">
                    Back to Products
                  </div>
                </Link>
              </div>

              {/* Product Description */}
              {product.fullDescription && (
                <div className="bg-white border border-gray-200 rounded-lg">
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-3">Description</h3>
                    <p className="text-gray-600">{product.fullDescription}</p>
                  </div>
                </div>
              )}

              {/* Ingredients */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-lg">
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-3">Ingredients</h3>
                    <ul className="space-y-1">
                      {product.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Nutrition Facts */}
              {product.nutritionFacts && (
                <div className="bg-white border border-gray-200 rounded-lg">
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-3">Nutrition Facts</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {product.nutritionFacts.calories && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Calories:</span>
                          <span className="font-medium">{product.nutritionFacts.calories}</span>
                        </div>
                      )}
                      {product.nutritionFacts.protein && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Protein:</span>
                          <span className="font-medium">{product.nutritionFacts.protein}</span>
                        </div>
                      )}
                      {product.nutritionFacts.carbs && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Carbs:</span>
                          <span className="font-medium">{product.nutritionFacts.carbs}</span>
                        </div>
                      )}
                      {product.nutritionFacts.fiber && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Fiber:</span>
                          <span className="font-medium">{product.nutritionFacts.fiber}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
