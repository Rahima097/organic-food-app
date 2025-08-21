"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const categories = [
  { name: "Fruits & Berries", image: "/beans-and-bread.png", count: "25+ items" },
  { name: "Breakfast", image: "/colorful-cereal-bowl.png", count: "15+ items" },
  { name: "Cereals", image: "/cereals-and-oats.png", count: "20+ items" },
  { name: "Energy Drinks", image: "/assorted-energy-drinks.png", count: "12+ items" },
  { name: "Fresh Fruits", image: "/fresh-fruits.png", count: "30+ items" },
  { name: "Juices", image: "/organic-juices.png", count: "18+ items" },
  { name: "Milk & Dairy", image: "/milk-and-yogurt.png", count: "22+ items" },
  { name: "Snacks", image: "/healthy-snacks-variety.png", count: "35+ items" },
]

export default function ProductHighlights() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch("/api/products")
        if (response.ok) {
          const products = await response.json()
          // Get first 3 products as featured
          setFeaturedProducts(products.slice(0, 6))
        }
      } catch (error) {
        console.error("Error fetching featured products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <Link key={index} href="/products" className="group">
                <div className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="p-4 text-center">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-16 h-16 mx-auto mb-2 rounded-full object-cover"
                    />
                    <h3 className="font-medium text-sm text-gray-900 group-hover:text-green-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500">{category.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium organic products
            </p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="animate-pulse">
                    <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                    <div className="bg-gray-200 h-4 rounded mb-2"></div>
                    <div className="bg-gray-200 h-6 rounded w-20"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product._id}
                  className="group bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="relative mb-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        FEATURED
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-green-600">${product.price}</span>
                      </div>
                      <Link href={`/products/${product._id}`}>
                        <div className="px-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors cursor-pointer group-hover:bg-green-600 group-hover:text-white">
                          View Details
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <Link href="/products">
              <div className="inline-block px-6 py-3 text-lg font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-50 transition-colors cursor-pointer">
                View All Products
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
