"use client"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-6">
      <div className="max-w-xl text-center">
        <img
          src="/Not-found.svg" 
          alt="Not found"
          className="w-64 h-64 mx-auto mb-6"
        />

        <h1 className="text-5xl font-bold text-green-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link href="/">
          <div className="inline-block px-6 py-3 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors">
            Back to Home
          </div>
        </Link>
      </div>
    </div>
  )
}
