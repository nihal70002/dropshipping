import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Premium Products
              <span className="block text-orange-400">Delivered Fast</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
              Discover our curated collection of high-quality products at unbeatable prices. 
              From electronics to home essentials, we've got everything you need.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-slate-900 transition-all duration-200">
                Learn More
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-white">4.8/5 Rating</span>
              </div>
              <div className="text-white">
                <span className="font-bold text-2xl">10k+</span>
                <span className="ml-1">Happy Customers</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl transform rotate-6 opacity-20"></div>
            <img
              src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg"
              alt="Premium Products"
              className="relative rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
            <Truck className="w-8 h-8 text-orange-400" />
            <div>
              <h3 className="font-semibold text-white">Free Shipping</h3>
              <p className="text-gray-300 text-sm">On orders over $50</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
            <Shield className="w-8 h-8 text-orange-400" />
            <div>
              <h3 className="font-semibold text-white">Secure Payment</h3>
              <p className="text-gray-300 text-sm">100% protected checkout</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
            <Headphones className="w-8 h-8 text-orange-400" />
            <div>
              <h3 className="font-semibold text-white">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}