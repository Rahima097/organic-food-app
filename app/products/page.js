import Link from "next/link"

// Mock product data
const products = [
  {
    id: 1,
    name: "Organic Green Energy Smoothie",
    description: "Boost your energy with our premium organic green smoothie blend",
    price: 29.99,
    image: "/organic-bananas.png",
  },
  {
    id: 2,
    name: "Fresh Organic Berries Mix",
    description: "Hand-picked organic berries bursting with natural flavors",
    price: 19.99,
    image: "/organic-strawberries.png",
  },
  {
    id: 3,
    name: "Organic Breakfast Cereal",
    description: "Start your day right with our nutritious organic cereal",
    price: 12.99,
    image: "/Organic Breakfast Cereal.png",
  },
  {
    id: 4,
    name: "Natural Energy Bars",
    description: "Perfect on-the-go snack made with organic ingredients",
    price: 15.99,
    image: "/almond-butter-jar.png",
  },
  {
    id: 5,
    name: "Organic Fruit Juice",
    description: "Pure organic fruit juice with no added sugars",
    price: 8.99,
    image: "/green-tea-package.png",
  },
  {
    id: 6,
    name: "Organic Milk",
    description: "Fresh organic milk from grass-fed cows",
    price: 6.99,
    image: "/organic-honey-jar.png",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our complete range of fresh, organic products sourced directly from trusted farms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">${product.price}</span>
                    <Link href={`/products/${product.id}`}>
                      <div className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors cursor-pointer group-hover:bg-green-700">
                        View Details
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
