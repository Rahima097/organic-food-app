"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "The more you love your health, more you eat",
      highlight: "organic",
      description:
        "Discover the power of eating fresh and natural. Organic food not only nourishes your body but also boosts your lifestyle with purity and wellness. Choose health, choose organic.",
      features: [
        "Food if it's not organic, is not a good food",
        "No medicine can heal you better than organic food does",
      ],
      image:
        "https://i.ibb.co.com/Kp46Jz9p/1.png",
      badge: "50% OFF",
    },
    {
      title: "Fresh organic produce delivered to your",
      highlight: "doorstep",
      description:
        "Experience the finest selection of farm-fresh organic vegetables, fruits, and superfoods. Sustainably grown and harvested at peak ripeness for maximum nutrition.",
      features: ["100% certified organic and pesticide-free", "Harvested fresh daily from local organic farms"],
      image: "https://i.ibb.co.com/4nyX8M2J/2.png",
      badge: "NEW",
    },
    {
      title: "Boost your energy with natural",
      highlight: "superfoods",
      description:
        "Discover our premium collection of organic superfoods, protein powders, and energy drinks. Fuel your body with nature's most powerful nutrients.",
      features: ["Rich in antioxidants and essential vitamins", "Sustainably sourced from organic farms worldwide"],
      image: "https://i.ibb.co.com/5h07rhqr/Healthy-Organic-Food-Facebook-Post.png",
      badge: "POPULAR",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="relative h-[500px] lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="font-serif text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      {slide.title} <span className="text-green-600">{slide.highlight}</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-lg">{slide.description}</p>
                  </div>

                  <div className="space-y-4">
                    {slide.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-900">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/products">
                    <div className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors cursor-pointer">
                      Shop Now
                      <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>

                {/* Product Image */}
                <div className="relative">
                  <div className="relative">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={`Organic product ${index + 1}`}
                      className="w-full h-auto max-w-lg mx-auto"
                    />
                    {/* Badge */}
                    <div
                      className={`absolute -top-4 -right-4 rounded-full w-20 h-20 flex items-center justify-center font-bold text-sm text-white ${
                        slide.badge === "50% OFF"
                          ? "bg-red-500"
                          : slide.badge === "NEW"
                            ? "bg-blue-500"
                            : "bg-orange-500"
                      }`}
                    >
                      {slide.badge}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors z-10"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors z-10"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-green-600" : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
