import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">🌱</span>
              </div>
              <span className="font-serif font-bold text-xl">Organic</span>
            </div>
            <p className="text-green-100">
              Fresh organic food delivered to your door. Nourish your body with natures finest ingredients.
            </p>
            <div className="flex space-x-4">
              <div className="px-3 py-2 text-sm text-white hover:bg-white/10 rounded transition-colors cursor-pointer">
                Facebook
              </div>
              <div className="px-3 py-2 text-sm text-white hover:bg-white/10 rounded transition-colors cursor-pointer">
                Twitter
              </div>
              <div className="px-3 py-2 text-sm text-white hover:bg-white/10 rounded transition-colors cursor-pointer">
                Instagram
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-green-100 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/products" className="block text-green-100 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="/about" className="block text-green-100 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-green-100 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Customer Service</h3>
            <div className="space-y-2">
              <Link href="/help" className="block text-green-100 hover:text-white transition-colors">
                Help Center
              </Link>
              <Link href="/shipping" className="block text-green-100 hover:text-white transition-colors">
                Shipping Info
              </Link>
              <Link href="/returns" className="block text-green-100 hover:text-white transition-colors">
                Returns
              </Link>
              <Link href="/privacy" className="block text-green-100 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-green-100 text-sm">
              Subscribe to our newsletter for the latest organic products and offers.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 text-white placeholder:text-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <div className="w-full px-4 py-2 text-sm font-medium text-green-600 bg-white rounded-md hover:bg-green-50 transition-colors cursor-pointer text-center">
                Subscribe
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-green-100 text-sm">© 2024 Organic Food Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
