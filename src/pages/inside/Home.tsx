
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import { ArrowRight, TrendingUp, Zap, Award } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Featured Shops */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Shops
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore top shops in your town with amazing offers!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {/* Shop 1 */}
            <Link
              to="/shop/1"
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 block"
            >
              <img
                src="/images/shop1.jpg"
                alt="Shop 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Shop 1</h3>
                <p className="text-gray-600">Your go-to store for daily essentials and special discounts.</p>
              </div>
            </Link>

            {/* Shop 2 */}
            <Link
              to="/shop/2"
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 block"
            >
              <img
                src="/images/shop2.jpg"
                alt="Shop 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Shop 2</h3>
                <p className="text-gray-600">Explore a variety of products at unbeatable prices.</p>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-200 transform hover:scale-105"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DropStore?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best shopping experience with unmatched quality and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trending Products</h3>
              <p className="text-gray-600">Stay ahead with the latest trends and hottest products in the market.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">Lightning-fast shipping to get your products to you as quickly as possible.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">Every product is carefully vetted to ensure the highest quality standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-orange-100 mb-8">
            Subscribe to our newsletter for exclusive deals and product updates.
          </p>

          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
            />
            <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
